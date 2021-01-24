<template>
    <base-layout screen-title = "Deck možnosť"> 
        <div class="center">
            <div style="width: 100%;">
            <ion-grid>
                <ion-row class="ion-justify-content-center" style="text-align: center;">
                    <p style="font-size: 3vmax;">Hurá dokončil/a si tento deck!</p>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-button color="success" size="large" style="font-size: 3vmax; margin: 25px; max-width: 98%">Vrátiť sa k nevyplneným kartám</ion-button>
                </ion-row>
                <ion-row class="ion-justify-content-center">
                    <ion-button @click="Continue()" color="success" size="large" style="font-size: 3vmax; margin: 10px;">Pokračovať</ion-button>  
                </ion-row>
            </ion-grid>
            </div>
        </div>
    </base-layout>
</template>


<script>
import { IonButton } from '@ionic/vue';

export default {
  components: {
    IonButton,
  },

  methods: {
   Continue() {
      this.$store.dispatch("eraseData")
      this.$router.push({name: 'Landing'})
    }
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

.center {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%; 
}

</style>