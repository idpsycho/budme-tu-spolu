<template>
    <ion-grid>
        <ion-row class="ion-justify-content-center">
            <img style="width: 80%" src="../../public/assets/LandingLogo.png" alt="LandingLogo" />
        </ion-row>
        <ion-row class="ion-justify-content-center">
            <ion-button style="width: 100%"  size="medium" expand="full" shape="round" color="success" href="/categories">Hrať</ion-button>
        </ion-row>
        <ion-row class="ion-justify-content-center">
            <ion-button style="width: 100%" size="medium" expand="full" shape="round" color="success">O appke</ion-button>
        </ion-row>
    </ion-grid>
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
