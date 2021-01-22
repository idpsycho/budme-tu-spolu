<template>
  <ion-slides
  pager="false"
  :options="{initialSlide: 1}"
  @ionSlideDidChange="onSliderChanged"
  v-if="cards != null"
  >

  <!-- Pozriet si dokumentaciu a mozno pouzit nieco ine ako slider -->
  <!-- Spravit to bez effektov, iba klikanie na button, uplne bez slideru!!! -->
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
          let cards = [
            Object.assign({}, this.cards[this.currentCard]),
            Object.assign({}, this.cards[this.currentCard]),
            Object.assign({}, this.cards[this.currentCard]),
          ];
          
          return cards;
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
      const swiper = await event.target.getSwiper();
      
      if (sliderIndex == 2) {
        this.nextSlide(event, 2);
        if (this.cards[this.currentCard+1] == null) {
          swiper.on('sliderMove', this.nextCategory())
        }
      }
      
      if (sliderIndex == 0) {
        this.nextSlide(event, 0);
        if (this.cards[this.currentCard+1] == null) {
          swiper.on('sliderMove', this.nextCategory())
        }
      }
    },
    async nextCategory() {
      let doneCategories = [];
      await Storage.get({key: 'isCategoryDone'}).then(resp => {doneCategories.push(resp.value)});
      if (doneCategories[0] == null) {
        doneCategories.pop()
      }
      doneCategories.push(parseInt(this.categoryId));
      await Storage.set({key: 'isCategoryDone', value: doneCategories})
      this.$router.push({name: 'Categories'})
    },
    async nextSlide(event, swipeSide) {
      this.swipeSidePush(swipeSide)
      event.target.slideTo(1);
      event.target.update();
      this.currentCard++;
    },
    async swipeSidePush(swipeSide) {
      if (swipeSide == 0) {
        let cards = [];
        await Storage.get({key: 'isCardAccepted'}).then(resp => {cards.push(resp.value)});
        if (cards[0] == null) {
          cards.pop()
        }
        
        cards.push(parseInt(this.cards[this.currentCard].id));
        await Storage.set({key: 'isCardAccepted', value: cards})
      }


      if (swipeSide == 2) {
        let cards = [];
        await Storage.get({key: 'isCardDeclined'}).then(resp => {cards.push(resp.value)});
        if (cards[0] == null) {
          cards.pop()
        }

        cards.push(parseInt(this.cards[this.currentCard].id));
        await Storage.set({key: 'isCardDeclined', value: cards})
      }
      
    }
  }
}

// 0 = Fajka
// 2 = Krizik
</script>
