<template>
  <ion-page>
    <ion-content>
      <ion-grid class="grid1">
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
          <ion-grid class="grid2">
            <div v-if="categories.length">
              <h2 class="select-category">Select category</h2>
                <div v-for="category in categories" :key="category.id" @click="navToCards(category.id)" class="a-category">
                    <ion-row :style="{'background-color':  category.color }" class="ion-justify-content-center ion-align-items-center row-category">
                      {{ category.name }}
                    </ion-row>
                </div>
            </div>
            <div v-else  class="ion-text-center ion-margin ion-padding">
              <h2 class="select-category">No categories found</h2>
            </div>
            <div>
              <div :to="{name: 'How-to-play'}" class="a-category">
                  <ion-row class="ion-justify-content-center ion-align-items-center how-to-play">
                      How to play
                  </ion-row>
              </div>
            </div>
          </ion-grid>
      </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

  export default {
    methods: {
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

.landing-block {
  height: 10vh;
  width: 20vw;
  font-size: 5vw;
  color: black;
  margin: auto;
}

.a-category {
    text-decoration: none;
    color: black;
    font-size: 5vw;
  }
  .row-category {
    height: 11vh;
    margin: 3vw;
  }

  .how-to-play {
    height: 11vh;
    margin: 3vw;
    margin-top: 7vh;
    background: #4D4D4D;
    color: white;
  }

.back-to-feed {
  height: 10vh;
  text-decoration: none;
  color: black; 
  margin:auto;
  font-size: 4.5vw;
  font-weight: bold;
  margin-left: 3vw;
}

.select-category {
  font-size: 5vw;
  color: black;
  margin: auto;
  line-height: 3.3vh;
  padding: 3vh 3vw 3vh 3vw;
}

.grid1 {
max-width: 100vw; 
height: 10%;
background: lightyellow;
}

.grid2 {
max-width: 100vw; 
height: 90%;
background: lightyellow;
}
</style>