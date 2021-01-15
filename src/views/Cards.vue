<template>
  <base-layout screen-title = "Karty" go-back-link="/">
    <ion-grid>
      <cardSlider />
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid } from '@ionic/vue';
import cardSlider from '@/views/components/slider.vue';

export default {
    name: 'cards',
    components: {
      IonGrid,
      cardSlider
    },
  };
</script>

<style scoped>
</style>
