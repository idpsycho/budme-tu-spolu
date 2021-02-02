<template>
  <div v-if="this.cards[0] != null" style="height: 70%">
    <div v-for="card of renderedCard" :key="card" :style="{'background-color':  card.category.color }" style="height: 50vh; font-size: 4vh; margin-top: 5vh;">
      {{card.id}}<br/>
      {{ card.activity }}<br/>
      {{card.description}}<br/>
      {{ currentCard+1 }} / {{ cards.length }}<br/>
      {{card.hashtag}}<br/>

      <div v-if="cards[currentCard+1] != null">
        <ion-button @click="nextCard(0)">Decline</ion-button>
        <ion-button v-if="cards[currentCard+1] != null" @click="nextCard(1)">Accept</ion-button>
      </div>

      <div v-else>
        <ion-button @click="nextCategory(0)">Decline</ion-button>
        <ion-button @click="nextCategory(1)">Accept</ion-button>
      </div>

    </div>
  </div>
</template>

<script>
import {IonButton} from "@ionic/vue";


export default {
  components: {
    IonButton
  },
  data() {
    return {
      categoryId: this.$route.params.categoryId,
      currentCard: 0,
    }
  },
  computed: {
    cards(){
      return this.$store.getters.getCardsByCategory(this.categoryId)
    },
    renderedCard() {
      return [this.cards[this.currentCard]]
    }
  },
  methods: {
    nextCard(isAccepted) {
      if (isAccepted == 1) {
        this.$store.dispatch('addAcceptedCard', this.cards[this.currentCard])
      } else {
        this.$store.dispatch('addDeclinedCard', this.cards[this.currentCard])
      }

      this.currentCard++
    },
    nextCategory(isAccepted) {
      if (isAccepted == 1) {
        this.$store.dispatch('addAcceptedCard', this.cards[this.currentCard])
      } else {
        this.$store.dispatch('addDeclinedCard', this.cards[this.currentCard])
      }
      this.$store.dispatch('addDoneCategory', this.categoryId)
      this.$router.push({name: 'Categories'})
    }
  }
}

// 0 = Fajka
// 2 = Krizik
</script>
