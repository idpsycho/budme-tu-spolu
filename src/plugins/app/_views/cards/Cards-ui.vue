<template>
  <base-layout>
    <ion-grid style="width: 100%; min-height: 100%; background: #FFDB2C; ">
      <ion-row>
        <ion-col>
          <div class="logo-block">
            Been<br>There<br>Together
          </div>
        </ion-col>
        <ion-col style="text-align: right;">
          <div>
            <ion-img class="icon-block" src="../assets/test-share.png"/>
          </div>
        </ion-col>
      </ion-row>
      <div style="border: 2px solid black; min-height: 60vh; border-radius: 10px; margin: 0 3vw 0 3vw;">
        <ion-row>
          <ion-col style="min-height: 60vh;" size="2">
            <button class="button-side"> test </button>
          </ion-col>
          <ion-col size="8">
            <button style="background: rgba(0,0,0,0); width: 100%; height: 6vh"> test </button>
            <div class="card-text">
              Spolupraca
            </div>
            <div class="card-text" style="margin-top: 10vh; font-weight: bold;">
              Vytvor svoju vlastnú kartu, ktorá by mala byť súčasťou Bratislavského balíka
            </div> 

          </ion-col>
          <ion-col style="min-height: 60vh;" size="2">
            <button class="button-side"> test </button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" style="height: 10vh; text-align: center;">
            <button style="background: rgba(0,0,0,0); width: 70%; height: 80%;"> 1/15 </button>
          </ion-col>
        </ion-row>
      </div>
    </ion-grid>
  </base-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
    mounted(){
      this.$store.dispatch('game/shuffleCards')
    },
    computed: {
      ...mapState('game', {gameCards: 'shuffledCards'}),
    },
  };

</script>

<style scoped>
.logo-block {
  height: 10vh;
  width: 20vw;
  font-size: 5vw;
  color: black;
  margin: 1vh 3vw 1vh 3vw;
}

.icon-block {
  width: 20vw;
  margin: 1vh 0vw 1vh 3vw;
  float: right;
}

.button-side {
  width: 100%; 
  height: 85%;
  background: rgba(0,0,0,0);
  margin-top: 8vh;
}

.card-text {
  text-align: center;
  font-size: 7vw;
}
</style>