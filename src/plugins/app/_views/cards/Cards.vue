<template>
  <base-layout screen-title="Karty">
    <cardSlider />
    <progressbar />
  </base-layout>
</template>

<script>
import cardSlider from '@/plugins/app/_components/slider.vue';
import progressbar from '@/plugins/app/_components/progress-bar.vue';

export default {
    components: {
      cardSlider,
      progressbar
    }
  };
</script>

<style scoped>
</style>
