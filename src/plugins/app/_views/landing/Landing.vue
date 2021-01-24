<template>
<base-layout screen-title = "Budme-Tu-Spolu">
  <div class="center">
    <div style="width: 100%;">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
            <img style="width: 80%" src="@/../public/assets/LandingLogo.png" alt="LandingLogo" />
        </ion-row>

        <ion-row v-if="$store.state.campaignData.data != null">
          <ion-button style="width: 100%" class="font"  size="medium" expand="full" shape="round" color="success" :router-link="{name: 'Categories'}">Hrať</ion-button>
        </ion-row>
        <ion-row>
            <ion-button href="http://www.beentheretogether.cards/" style="width: 100%" class="font" size="medium" expand="full" shape="round" color="success">O appke</ion-button>
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
};
</script>

<style scoped>

.center {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
}
</style>
