<template>
  <base-layout>
    <ion-grid style="max-width: 100vw;">
      <ion-row>
        <ion-col>
          <table style="width: 100%;">
              <tr>
                <td style="width: 75vw;">
                  <router-link :to="{ name: 'Landing'}" class="back-to-feed">&lt; Back to feed</router-link>
                </td> 
                <td style="width: 25vw">
                  <div class="landing-block">
                  Been<br>There<br>Together
                  </div>
                </td>
              </tr>   
          </table>
        </ion-col>
      </ion-row>
    </ion-grid>
    <ion-grid>
            <h2 class="select-category">Select category</h2>
            <ion-slides pager="false" :options="slideOpts">
            <ion-slide>
                <div style="min-height: 40vh; background-color: #E0E0E0; width: 100vw; margin: 3vw; text-align: left; padding: 5vw;">
                    <h5 class="box-text1">Start here</h5>
                    <h1 class="box-text2">How to play</h1>
                    <h5 class="box-text1">Learn how to play the game. Recommended before starting</h5>
                </div>
            </ion-slide>
            <ion-slide>
                <div style="min-height: 40vh; background-color: #F2F2F2; width: 100vw; margin: 3vw; text-align: left; padding: 5vw;">
                    <h5 class="box-text1">Deck 1</h5>
                    <h1 class="box-text2">Research</h1>
                    <h5 class="box-text1">Challenging tasks and questions to re-think and analyze your environment and people you are surrounded by.</h5>
                </div>
            </ion-slide>
            <ion-slide>
               <div style="min-height: 40vh; background-color: #E0E0E0; width: 100vw; margin: 3vw; text-align: left; padding: 5vw;">
                    <h5 class="box-text1">Deck 2</h5>
                    <h1 class="box-text2">Interaction</h1>
                    <h5 class="box-text1">Be the person you want to meet. By easy actions, explore your presence in any public space. Light interaction helps you change the atmosphere of the place where you are at the moment.</h5>
                </div>
            </ion-slide>
            <ion-slide>
               <div style="min-height: 40vh; background-color: #F2F2F2; width: 100vw; margin: 3vw; text-align: left; padding: 5vw;">
                    <h5 class="box-text1">Deck 3</h5>
                    <h1 class="box-text2">Dialogue</h1>
                    <h5 class="box-text1">Have you ever wanted to talk to someone interesting but you never know how to start? This game gives you a good opportunity to act. Start the conversation with a stranger and get to know the people who walk by.</h5>
                </div>
            </ion-slide>
            <ion-slide>
               <div style="min-height: 40vh; background-color: #E0E0E0; width: 100vw; margin: 3vw; text-align: left; padding: 5vw;">
                    <h5 class="box-text1">Deck 4</h5>
                    <h1 class="box-text2">Collaboration</h1>
                    <h5 class="box-text1">The most challenging category.To fulfill the level you have to develop a daring attitude to collaborate with people you don't know. To succeed you need to find people willing to collaborate with you on the given tasks. This is opening space for new interesting connections.</h5>
                </div>
            </ion-slide>
            </ion-slides>
            <div>
                <router-link :to="{name: 'Categories'}" class="a-category">
                    <ion-row class="ion-justify-content-center ion-align-items-center how-to-play">
                        Start game
                    </ion-row>
                </router-link>
            </div>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 1.08,
    };
    return { slideOpts }
  }
});

</script>

<style scoped>
.back-to-feed {
  text-decoration: none;
  color: black; 
  font-size: 4.5vw;
  font-weight: bold;
  line-height: 3.3vh;
  margin-left: 3vw;

}

.landing-block {
  height: 10vh;
  width: 20vw;
  font-size: 5vw;
  color: black;
  margin: auto;
}

.select-category {
  font-size: 5vw;
  color: black;
  margin: auto;
  line-height: 3.3vh;
  padding: 3vh 3vw 3vh 3vw;
}
.a-category {
    text-decoration: none;
    color: black;
    font-size: 5vw;
  }
 .how-to-play {
    height: 11vh;
    margin: 3vw;
    margin-top: 7vh;
    background: #4D4D4D;
    color: white;
  }

.box-text1 {
    font-size: 2vh;
    color: black;
}
.box-text2 {
    font-size: 10vw;
    font-weight: bold;
    color: black;
    display: flex; 
}
</style>