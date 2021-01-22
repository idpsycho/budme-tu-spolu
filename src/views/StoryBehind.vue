<template>
    <base-layout screen-title = "Story Behind" go-back-link="/">
    <div style="display:flex;justify-content:center;align-items:center;width:100%;">
      <div style="height:100%">
        <ion-grid>  
                  <ion-row>
                    <ion-card>
                      <ion-card-header>
                        <img style="width: 100%" src="../../public/assets/LandingLogo.png" alt="LandingLogo" />
                        <ion-card-title style="text-align:center; margin-top: 5px;">Random Title</ion-card-title>
                      </ion-card-header>

                      <ion-card-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ipsum massa, convallis lobortis diam non, tincidunt convallis dolor. Quisque ultricies lacus at condimentum maximus. Phasellus lectus massa, eleifend id elit nec, commodo sollicitudin purus. In ex mauris, venenatis nec ipsum et, dignissim porta sapien.
                      </ion-card-content>
                    </ion-card>
                  </ion-row>
        </ion-grid>
      </div>
    </div>
    </base-layout>
</template>

<script>
import { IonGrid, IonRow } from '@ionic/vue'
import { IonCard, IonCardContent, IonCardTitle } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Storybehind',
  components: {
    IonGrid,
    IonRow,
    IonCard,
    IonCardContent, 
    IonCardTitle, 

  }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap')

</style>