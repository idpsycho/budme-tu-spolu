<template>
  <ion-slides
  pager="true"
  :options="{initialSlide: 1}"
  @ionSlideDidChange="onSliderChanged"
  >

    <ion-slide v-for="card of renderedCards" :key="card.id" :style="{'background-color':  card.category.color }">
      {{card.id}}<br/>
      {{card.description}}<br/>
      {{card.hashtag}}<br/>
    </ion-slide>

  </ion-slides>

</template>

<script>
import axios from 'axios'
import { IonSlides, IonSlide } from '@ionic/vue';

export default {
  name: 'slider',
  components: {
    IonSlides,
    IonSlide
  },
  data() {
    return {
      cards: [],
      categoryId: this.$route.params.categoryId,
      currentCard: 0,
    }
  },
  mounted() {
      axios.get('https://budme-tu-spolu-admin.hybridlab.dev/api/v1/campaign/tag/BEENTHERETOGETHER')
      .then(response => {this.cards = response.data.cards.filter(element => element.category_id == this.categoryId) });
  },
  computed: {
      renderedCards() {
        let cards = [
          this.cards[this.currentCard+1],
          this.cards[this.currentCard],
          this.cards[this.currentCard+1],

        ];

        return cards;
      }
  },
  methods: {
    async onSliderChanged(event) {
     
      const sliderIndex = await event.target.getActiveIndex();
      console.log(sliderIndex);

      if (sliderIndex == 0) {
        this.currentCard++;
        event.target.slideTo(1);
        event.target.update();
      }

      if (sliderIndex == 2) {

        this.currentCard++;
        event.target.slideTo(1);
        event.target.update();
      }
    }
  }
}
</script>
