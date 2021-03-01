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
        <card v-for="(card, i) in gameCards" :key="card.id" :card="card" :countString="`${i+1}/${gameCards.length}`" v-show="i == activeCardIndex"/>
        <div class="footer">
          <ion-icon :icon="playForwardCircle"></ion-icon>
          <ion-icon :icon="informationCircleOutline"></ion-icon>
          <ion-icon :icon="checkmarkCircle" @click="completeCard"></ion-icon>
        </div>
      </div>
  </ion-content>
</ion-page>
</template>

<script>
import { mapState } from 'vuex';
import { closeOutline, addCircleOutline, playForwardCircle, informationCircleOutline, checkmarkCircle } from 'ionicons/icons'

import Card from '@/plugins/app/_components/card.vue'

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
        activeCardIndex: 0
      }
    },
    mounted(){
      this.$store.dispatch('game/shuffleCardsFromCategory', this.$route.params.categoryId)
    },
    methods:{
      completeCard(){
        this.activeCardIndex++
      }
    },
    computed: {
      ...mapState('game', {gameCards: 'shuffledCards'}),
      ...mapState('offline', {offlineCategories: 'categories'}),

      categoryColor(){
        return this.offlineCategories.filter(category => category.id == this.$route.params.categoryId)[0]?.color
      }
    },
    watch:{
      $route(){
        this.$store.dispatch('game/shuffleCardsFromCategory', this.$route.params.categoryId)
        this.activeCardIndex = 0
      }
    }
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
</style>