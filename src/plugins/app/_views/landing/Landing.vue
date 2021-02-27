<template>
  <ion-page>
    <ion-content class="has-header">
      <ion-grid class="bg-image">
        <ion-toolbar class="header">
        <ion-row>
          <ion-col size="6">
            <div class="logo font">
              BEEN<br>THERE<br>TOGETHER
            </div>
          </ion-col>
          <ion-col size="2" style="text-align: right;">
            <div>
              <img class="icon-header" src="/assets/icon/question.png">
            </div>
          </ion-col>
          <ion-col size="4">
            <ion-button color="dark" class="play-button" @click="$router.push({name:'Categories'})">
              PLAY
            </ion-button>
          </ion-col>
        </ion-row>
        </ion-toolbar>
        <ion-row>
          <ion-col size="12">
            <div class="caption-main font">
              Explore your environment through play
            </div>
            <div class="caption-second font">
              BTT will get you out of your comfort zone. Play on your own, engage with your surroundings, learn something and meet new people
            </div>
            <ion-button class="btn-try-it-out" color="dark" expand="block" @click="$router.push({name:'Categories'})">Try it out!</ion-button>
            <img class="caret-down" src="/assets/icon/caret-down.png">
          </ion-col>
        </ion-row>
        <ion-col>
            <h1 class="feed-caption-main font" >Community feed</h1>
            <h5 class="feed-caption-second font">This feed consists of uploads from other players. You can add to this feed from within the game session.</h5>
            
            <!-- Feed s obrazkom -->

            <div class="feed-style-image">
              <img class="feed-img" src="/assets/test-feed.jpg">
              <div class="feed-text">
              <h5 class="feed-text-main font" >#beentheretogether is a single-player game that challenges you to step out of your comfort zone and get to know people and spaces in your city: http://bit.ly/2TV7wA3</h5>
              <ion-row>
                <ion-col size="6">
                  <h6 class="feed-date font">Dec 12, 2021 16:45</h6>
                </ion-col>
                <ion-col size="2" style="text-align: right;">
                  <div>
                    <img class="feed-icon" src="/assets/icon/share.png">
                  </div>
                </ion-col>
                <ion-col size="4">
                  <button class="feed-button">
                  <ion-row>
                    <img src="/assets/icon/eye.png" class="feed-eye">
                    <div class="feed-btn-text">
                      Card
                    </div>
                  </ion-row>
                  </button>
                </ion-col>
              </ion-row>
              </div>
            </div>

             <!-- Feed iba s textom -->

             <div class="feed-style-text">
              <div>
              <h5 class="feed-style-text-main-text font" style="background-color: #FFDB2C;" >Enjoyed playing an awesome game. Project of my friend, makes you interact with surroudings! #beentheretogether</h5>
              <ion-row class="feed-text">
                <ion-col size="6">
                  <h6 class="feed-date font">Dec 12, 2021 16:45</h6>
                </ion-col>
                <ion-col size="2" style="text-align: right;">
                  <div>
                    <img class="feed-icon" src="/assets/icon/share.png">
                  </div>
                </ion-col>
                <ion-col size="4">
                  <button class="feed-button">
                  <ion-row>
                    <img src="/assets/icon/eye.png" class="feed-eye">
                    <div class="feed-btn-text">
                      Card
                    </div>
                  </ion-row>
                  </button>
                </ion-col>
              </ion-row>
              </div>
            </div>

        </ion-col>
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
  font-weight: bolder;
}

.icon-header {
  height: 12vw;
  color: black;
  margin: 3vh 3vw 0vh 3vw;
  display: flex;
  font-weight: bolder;
}

.play-button {
  color: white;
  margin: 3vh 3vw 0vh 3vw;
  height: 12vw;
  width: 20vw;
  font-size: 3vw;
}

.caption-main {
  font-weight: 700;
  font-size: 12vw;
  padding: 5vh 3vw 5vh 3vw;
}

.caption-second {
  font-weight: 700;
  font-size: 5vw;
  padding: 5vh 1vw 5vh 1vw;
}
.bg-image {
    min-height: 100vh;
    background: url(/assets/pozadie.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 0px;
}

.btn-try-it-out {
  margin: 3vh 1vw 3vh 1vw;
  height: 8vh;
  font-size: 5vw;
}

.caret-down {
  width: 10vw;
  display: flex;
  margin-left: auto;
  margin-right: auto
}
.header {
position: sticky;
top: 0;
width: 100vw;
}

.feed-caption-main {
  font-weight: 700;
  font-size: 6vw;
  padding: 5vh 3vw 1vh 3vw;
}

.feed-caption-second {
  font-weight: 500;
  font-size: 5vw;
  padding: 0vh 3vw 5vh 3vw;
}

.feed-style-image {
  margin: 3vh 3vw 3vh 3vw;
}

.feed-style-text {
  margin: 3vh 3vw 3vh 3vw;
}

.feed-img {
  border: 2px solid black;
  border-radius: 15px;
  width: 100%;
  padding: 0;
  margin-bottom: -8vh;
  background-color: black;
  z-index: 999;
}

.feed-text {
  padding: 8vh 3vw 1vh 3vw;
  border: 2px solid black;
  border-top: none;
  border-radius: 0px 0px 15px 15px;
}

.feed-icon {
    height: 6vw;
    margin-top: 6vw;
    margin-right: 2vw;
}

.feed-button {
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 5vw;
  padding: 3vw;
  height: 12vw;
  margin-top: 3vw;
}

.feed-eye {
  height: 5vw;
  margin-right: 1vw;
}

.feed-text-main {
  font-size: 4vw;
  font-weight: 500;
}

.font {
  font-family: 'IBM Plex Sans', sans-serif;
}

.feed-date {
  font-size: 3.5vw;
  margin-top: 7vw;
}

.feed-style-text-main-text {
  border: 3px solid black;
  border-radius: 15px;
  padding: 3vw;
  font-size: 5vw;
  font-weight: 500;
  color:black;
  margin-bottom: -8vh;
  z-index: 999;
}
ion-button {
  text-transform: none;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  
}
 </style>