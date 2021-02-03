<template>
  <ion-page>
    <ion-header>

    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  //IonToolbar,
  //IonTitle,
  IonContent,
  //IonBackButton,
  //IonButtons,
} from "@ionic/vue";

export default {
  props: ["screenTitle", "goBackLink"],
  components: {
    IonPage,
    IonHeader,
    //IonToolbar,
    //IonTitle,
    IonContent,
    //IonBackButton,
    //IonButtons,
  },
};
</script>