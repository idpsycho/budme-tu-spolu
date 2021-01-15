<template>
    <base-layout screen-title = "Budme-Tu-Spolu">
        <div class="center">
            <div style="width: 100%;">
            <ion-grid>
                <ion-row class="ion-justify-content-center">
                    <img style="width: 80%" src="../../public/assets/LandingLogo.png" alt="LandingLogo" />
                </ion-row>
                <ion-row>
                    <ion-button style="width: 100%" class="font"  size="medium" expand="full" shape="round" color="success" router-link="/categories">Hrať</ion-button>
                </ion-row>
                <ion-row>
                    <ion-button  fake  style="width: 100%" class="font" size="medium" expand="full" shape="round" color="success">O appke</ion-button>
                </ion-row>
            </ion-grid>
            </div>
        </div>
    </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Landing',
  components: {
    IonButton,
    IonGrid,
    IonRow
  }
});
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
[fake] {
    opacity: 0.2 !important;
}

</style>