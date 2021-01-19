<template>
  <ion-slides
  pager="true"
  :options="{initialSlide: 1}"
  @ionSlideDidChange="onSliderChanged"
  v-if="cards != null"
  >

    <ion-slide v-for="(card, i) of renderedCards" :key="i" :style="{'background-color':  card.category.color }">
      {{card.id}}<br/>
      {{card.description}}<br/>
      {{card.hashtag}}<br/>
    </ion-slide>

  </ion-slides>

</template>

<script>
import axios from 'axios'
import { IonSlides, IonSlide } from '@ionic/vue';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export default {
  name: 'slider',
  components: {
    IonSlides,
    IonSlide
  },
  data() {
    return {
      cards: null,
      categoryId: this.$route.params.categoryId,
      currentCard: 0,
    }
  },
  async mounted() {
      await Storage.get({ key: 'campaignData' })
      .then(response => {response = JSON.parse(response.value).data; this.cards = response.cards.filter(element => element.category.id == this.categoryId) });
  },
  computed: {
      renderedCards() {
        if (this.cards[this.currentCard+1] == null) {
          return;
        }
        let cards = [
          Object.assign({}, this.cards[this.currentCard+1]),
          Object.assign({}, this.cards[this.currentCard]),
          Object.assign({}, this.cards[this.currentCard+1]),
        ];
        
        return cards;
      }
  },
  methods: {
    async onSliderChanged(event) {
     
      const sliderIndex = await event.target.getActiveIndex();
    
      if (sliderIndex == 2) {
        this.nextSlide(event);
      }
      if (sliderIndex == 0) {
        this.nextSlide(event);
      }

      if (this.cards[this.currentCard+1] == null) {
          let doneCategories = [];
          await Storage.get({key: 'isCategoryDone'}).then(resp => {doneCategories.push(resp.value)});
          if (doneCategories[0] == null) {
            doneCategories.pop()
          }
          console.log(doneCategories)
          doneCategories.push(parseInt(this.categoryId));
          await Storage.set({key: 'isCategoryDone', value: doneCategories})
          this.$router.push({name: 'Categories'})
        }
      
    },
    async nextSlide(event) {
      event.target.slideTo(1);
      event.target.update();
      this.currentCard++;
    }
  }
}
</script>
