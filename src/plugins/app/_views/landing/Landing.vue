<template>
  <ion-page>
    <ion-content>
      <ion-grid class="bg-image">
        <ion-toolbar>
        <ion-row>
          <ion-col size="5">
            <div class="logo">
              BEEN<br>THERE<br>TOGETHER
            </div>
          </ion-col>
          <ion-col style="5">
            <div class="language">
              EN/SK
            </div>
          </ion-col>
          <ion-col size="2" style="text-align: right;">
            <div>
              <img class="icon1" src="/assets/icon/question.png">
            </div>
          </ion-col>
        </ion-row>
        </ion-toolbar>
        <ion-row>
          <ion-col size="12">
            <div class="text1">
              Explore your environment through play
            </div>
            <div class="text2">
              BTT will get you out of your comfort zone. Play on your own, engage with your surroundings, learn something and meet new people
            </div>
            <ion-button class="btn-try-it-out" color="dark" expand="block">Try it out!</ion-button>
            <img class="icon2" src="/assets/icon/caret-down.png">
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>

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

.language {
  font-size: 6vw;
  color: black;
  margin: 4vh 3vw 0vh 3vw;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  float: right;
}

.text1 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 12vw;
  padding: 5vh 3vw 5vh 3vw;
}

.text2 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  font-size: 5vw;
    padding: 5vh 1vw 5vh 1vw;
}
.bg-image {
    min-height: 100vh;
    background: url(/assets/pozadie.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
}

.btn-try-it-out {
  margin: 3vh 1vw 3vh 1vw;
  height: 8vh;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 5vw;
}

.icon2 {
  width: 10vw;
  display: block;
  margin-left: auto;
  margin-right: auto
}
ion-button {
  text-transform: none;
}
 </style>