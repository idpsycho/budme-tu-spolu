<template>
  <base-layout screen-title = "Karty" go-back-link="/">
    <cardSlider />
<!--      <progressbar />-->
  </base-layout>
</template>

<script>
import cardSlider from '@/plugins/app/_components/slider.vue';
// import progressbar from '@/src/plugins/app/_components/progress-bar.vue';

export default {
    name: 'cards',
    components: {
      cardSlider,
      // progressbar
    },
  };
</script>

<style scoped>
</style>
