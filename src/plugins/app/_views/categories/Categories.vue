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
      <div v-if="categories != null">
         <h2 class="select-category">Select category</h2>
        <router-link v-for="category in notDoneCategories" :key="category.id" :to="{ path: '/categories/' + category.id + '/cards' }" class="a-category">
            <ion-row :style="{'background-color':  category.color }" class="ion-justify-content-center ion-align-items-center row-category">
              {{ category.name }}
            </ion-row>
        </router-link>
      </div>
      <div>
        <router-link :to="{name: 'How-to-play'}" class="a-category">
            <ion-row class="ion-justify-content-center ion-align-items-center how-to-play">
                How to play
            </ion-row>
        </router-link>
      </div>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonRow,} from '@ionic/vue';
import { watch } from 'vue';
// ToDo: ; do prdele
// ToDo: ODPORUCANIE: w@tip/no-semis
  export default {
    components: { IonRow },
    computed: {
      categories(){
        return this.$store.getters.getCategories
      },
      notDoneCategories() {
        let categories = [];
        let doneCategories = this.$store.getters.getDoneCategories
        for (let i = 0; i <= this.categories.length - 1; i++) {
          if (!doneCategories.includes(this.categories[i].id)) {
            categories.push(this.categories[i])
          }
        }
        
        return categories
      }
    },
    methods: {
      nextDeck() {
        this.$router.push({name: 'Nextdeck'})
      }
    },
    watch: {
      notDoneCategories(categories) {
        if (!categories.length) {
          this.nextDeck()
        }
      }
    }
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
</style>