<template>
  <base-layout go-back-link = "/categories">
    <ion-grid>
        <ion-row class="ion-justify-content-center">
            <img style="width: 80%" src="@/public/assets/LandingLogo.png" alt="LandingLogo" />
        </ion-row>
        <ion-row class="ion-justify-content-center">
            <ion-button style="width: 100%"  size="medium" expand="full" shape="round" color="success" href="/categories">Hrať</ion-button>
        </ion-row>
            <ion-datetime display-format="DDDD MMM D, YYYY"></ion-datetime>
        <ion-row class="ion-justify-content-center">
              <ion-progress-bar value="0.25" class="progress-bar"></ion-progress-bar>
        </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow, IonButton, IonDatetime } from '@ionic/vue';

export default {
  components: {
    IonButton,
    IonGrid,
    IonRow,
    IonDatetime
  },
}
</script>

<style scoped>
.progress-bar {
  height: 2vmax;
  border-radius: 25px;
}
</style>
