<template>
<ion-page>
  <ion-content>
      <div class="wrapper" :style="`background-color: ${categoryColor};`">
        <div class="header">
            <div class="logo-block">
              BEEN<br />THERE<br />TOGETHER
            </div>
            <div class="icons-wrapper">
              <ion-icon :icon="addCircleOutline"></ion-icon>
              <ion-icon :icon="closeOutline" @click="$router.push({name: 'Categories'})"></ion-icon>
            </div>
        </div>
        
        <div v-if="!cycledAllCards">
          <card v-for="(card, i) in playingCards" :key="card.id" :card="card" :countString="`${i+1}/${playingCards.length}`" v-show="i == activeCardIndex"/>
          <div class="footer">
            <ion-icon :icon="playForwardCircle" @click="skipCard"></ion-icon>
            <ion-icon :icon="informationCircleOutline" :class="{disabledIcon: !hasStoryBehind}" @click="openStoryBehind"></ion-icon>
            <ion-icon :icon="checkmarkCircle" @click="completeCard"></ion-icon>
          </div>
        </div>
        <div v-else class="cards-finished-wrapper ion-text-center">
          <h1>Deck finished</h1>
          <div class="middle-buttons">
            <ion-button @click="finishCurrentCategory">Switch category</ion-button>
            <ion-button @click="playSkippedCards" :disabled="!gameSkippedCards.length">Play skipped cards</ion-button>
            <ion-button @click="resetCurrentGame">Shuffle new deck</ion-button>
          </div>
          <ion-button class="bottom-btn" :style="`color: ${categoryColor}`">Share your experience</ion-button>
        </div>
      </div>
  </ion-content>
</ion-page>
</template>

<script>
import { mapState } from 'vuex';
import { closeOutline, addCircleOutline, playForwardCircle, informationCircleOutline, checkmarkCircle } from 'ionicons/icons'
import { modalController } from '@ionic/vue';

import Card from '@/plugins/app/_components/card.vue'
import StoryBehind from '@/plugins/app/_components/story-behind.vue'

export default {
    components:{ Card },
    setup(){
      return{
        closeOutline,
        addCircleOutline,
        playForwardCircle,
        informationCircleOutline,
        checkmarkCircle

      }
    },
    data(){
      return{
        activeCardIndex: 0,
        playingSkipped: false
      }
    },
    mounted(){
      this.$store.dispatch('game/shuffleCardsFromCategory', this.$route.params.categoryId)
    },
    methods:{
      completeCard(){
        this.activeCardIndex++
      },
      skipCard(){
        this.$store.commit('game/cardSkipped', this.playingCards[this.activeCardIndex])
        this.activeCardIndex++
      },
      async openStoryBehind(){
        if(!this.hasStoryBehind) return
        const modal = await modalController
          .create({
            component: StoryBehind,
            componentProps: {
              card: this.playingCards[this.activeCardIndex]
            },
          })
        return modal.present();
      },
      finishCurrentCategory(){
        this.$store.commit('game/categoryFinished', this.$route.params.categoryId)
        this.$router.push({name: 'Categories'})
      },
      async resetCurrentGame(){
        this.playingSkipped = false
        await this.$store.dispatch('game/shuffleCardsFromCategory', this.$route.params.categoryId)
        this.activeCardIndex = 0
      },
      playSkippedCards(){
        //save skipped cards into component state and reset store cards for recursive behaviour
        this.playingSkipped = false //triggers computed if action is repeated 
        this.skippedCardsDeck = this.gameSkippedCards
        this.activeCardIndex = 0
        this.playingSkipped = true

        this.$store.commit('game/skippedCardsPlayed')
      }
    },
    computed: {
      ...mapState('game', {gameCards: 'shuffledCards', gameSkippedCards: 'skippedCards'}),
      ...mapState('offline', {offlineCategories: 'categories'}),
      
      playingCards(){
        return this.playingSkipped ? this.skippedCardsDeck : this.gameCards
      },
      categoryColor(){
        return this.offlineCategories.filter(category => category.id == this.$route.params.categoryId)[0]?.color
      },
      cycledAllCards(){
        return this.playingCards.length == this.activeCardIndex
      },
      hasStoryBehind(){
        return !!this.playingCards[this.activeCardIndex].story_text.length
      }
    },
  };


</script>

<style scoped>
.wrapper{
  width: 100%;
  height: 100vh;
}
.header{
  display: flex;
  height: 120px;
}
.logo-block {
  font-size: 17.81px;
  font-weight: 700;
  margin-top: 20px;
  margin-left: 20px;
  width: calc(100% - 50px);
}
.icons-wrapper{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
}
.icons-wrapper ion-icon{
  font-size: 40px;
}
.icons-wrapper:last-child{
  margin-right: 10px;
}

.button-side {
  width: 100%; 
  height: 85%;
  background: rgba(0,0,0,0);
  margin-top: 8vh;
}
.footer{
  display: flex;
  justify-content: space-evenly;
  margin-top: 60px;
}
.footer ion-icon{
  font-size: 40px;
}
.cards-finished-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cards-finished-wrapper ion-button{
  height: 64px;
  width: 343px;
  border: 2.75px solid black;
  border-radius: 16px;
  color: black;
  font-weight: 700;
  --background: none;
  --background-activated: rgba(172, 172, 172, 0.453);
}
.cards-finished-wrapper .middle-buttons{
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.cards-finished-wrapper .middle-buttons ion-button{
  margin-top: 25px;
}
.bottom-btn{
  position: absolute;
  bottom: 1em;
  border: none!important;
  --background: black!important;
  --background-activated: rgb(36, 33, 33);
}
.disabledIcon{
  opacity: 0.4;
}
</style>