<template>
  <base-layout screen-title = "Karty" go-back-link="/">
    <ion-grid>
      <cardSlider />
      <progressbar />
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid } from '@ionic/vue';
import cardSlider from '@/views/components/slider.vue';
import progressbar from '@/views/components/progress-bar.vue';

export default {
    name: 'cards',
    components: {
      IonGrid,
      cardSlider,
      progressbar
    },
  };
</script>

<style scoped>
</style>
