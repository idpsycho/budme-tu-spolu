<template>
  <base-layout>
    <ion-grid class="grid1">
      <ion-row>
          <ion-col size="6">
            <div class="logo">
              BEEN<br>THERE<br>TOGETHER
            </div>
          </ion-col>
          <ion-col size="6" style="text-align: right;">
            <div @click="$router.push({name: 'Landing'})">
              <img class="icon1" src="/assets/icon/x-circle.png">
            </div>
          </ion-col>
        </ion-row>
            <div class="select-category">Select category</div>
            <ion-slides pager="true" :options="slideOpts" @ionSlideTransitionStart="setActiveCategory">
              <ion-slide v-for="(category, i) in categories" :key="category.id" @click="navToCards(category.id)">
                  <div class="custom-card" :style="`background-color: ${category.color};`">
                      <ion-row>
                        <ion-col size="8">
                          <div class="box-text1">{{`Category ${i+1}`}}</div>
                        </ion-col>
                        <ion-col size="2" class="player-number">
                          <div>1</div>
                        </ion-col>
                        <ion-col size="2">
                          <ion-img src="/assets/icon/player.png" class="player"></ion-img>
                        </ion-col>
                      </ion-row>
                      <h1 class="box-text2">{{category.name}}</h1>
                      <h5 class="box-text3">Learn how to play the game. Recommended before starting</h5>
                  </div>
              </ion-slide>
            </ion-slides>
            <div @click="navToCards(activeCategory.id)">
                <div style="text-decoration: none;">
                    <ion-row class="ion-justify-content-center ion-align-items-center how-to-play" :style="`background: ${activeCategory.color};`">
                        Start {{activeCategory.name}}
                    </ion-row>
                </div>
            </div>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  components: { IonSlides, IonSlide },
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 1.1,
    };
    return { slideOpts }
  },
  data(){
    return{
      activeCategory: {}
    }
  },
  mounted(){
    this.activeCategory = this.categories[0]
  },
  methods: {
    setActiveCategory(e){
      //FIXME neviem ci toto je best solution mal by fungovat getActiveIndex() ale ludia sa stazuju ze nefunguje a ani mne nefunguje cize idk zatial toto ide
      this.activeCategory = this.categories[e.target.swiper.snapIndex]
    },
    async navToCards(categoryId){
      this.$router.push({name: 'Cards-ui', params:{categoryId: categoryId}})
    }
  },
  computed: {
    ...mapState('offline', ['categories']),
  },
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

.logo {
  font-size: 4vw;
  color: black;
  margin: 2vh 3vw 0vh 3vw;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bolder;
}

.icon1 {
  width: 10vw;
  color: black;
  margin: 3vh 3vw 0vh 3vw;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bolder;
  float: right;
}

.select-category {
  font-size: 4vw;
  color: black;
  margin: auto;
  line-height: 3.3vh;
  padding: 3vh 3vw 3vh 3vw;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
  text-align: center;
}
 .how-to-play {
    height: 11vh;
    margin: 3vw;
    margin-top: 7vh;
    color: black;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 5vw;
  }

.box-text1 {
    font-size: 5vw;
    color: black;
    font-family: 'IBM Plex Sans', sans-serif;
}
.box-text2 {
    font-size: 10vw;
    font-weight: bold;
    color: black;
    font-family: 'IBM Plex Sans', sans-serif;
}
.box-text3 {
    font-size: 2vh;
    padding-right: 3vw;
    margin: 0px 3vw 2vh 0;
    color: black;
    font-family: 'IBM Plex Sans', sans-serif;
}

.custom-card {
  min-height: 40vh;
  margin: 1vh 3vw 0 3vw;
  width: 100vw; 
  text-align: left; 
  padding: 5vw;
  border: 2px solid black;
  border-radius: 10px;
}
.player {
  width: 7vw;
}
.player-number {
  text-align: right; 
  font-size: 6vw;
}
.slides-ios {
    --bullet-background: radial-gradient(circle, transparent 10%, black 90%);
    --bullet-background-active: black;
    --progress-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.25);
    --progress-bar-background-active: var(--ion-color-primary-shade, black);
    --scroll-bar-background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);
    --scroll-bar-background-active: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.5);;
}
ion-slide{
  margin-bottom: 6em;
}

</style>