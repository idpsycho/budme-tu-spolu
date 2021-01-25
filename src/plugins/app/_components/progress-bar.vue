<template>
  <ion-item v-for="category in categories" :key="category.id">
      <ion-progress-bar :value="RenderProgressBarValue(category)" :style="{ '--progress-background': category.color, '--background': 'lightgray' }"></ion-progress-bar>
  </ion-item>
</template>

<script>
import { IonItem, IonProgressBar } from '@ionic/vue';

export default {
  components: {
    IonItem,
    IonProgressBar
  },
  
  computed: { //computed - funkcia categories taha na novo data zo store potom ako sa refreshne jeho content
    categories(){
      return this.$store.getters.getCategories
    }
  },

  methods: {
    RenderProgressBarValue(category) {
      let allCardsInCategory = this.$store.getters.getCardsByCategory(category.id)
      let allSwipedCardsIds = null
      allSwipedCardsIds = this.$store.getters.getSwipedCards

      let count = allCardsInCategory.map(function (x) { if (allSwipedCardsIds.includes(x.id)) { return true } }).filter(x => x == true)

      return ((100 / allCardsInCategory.length)  * count.length) / 100
    }
  }
}
</script>
