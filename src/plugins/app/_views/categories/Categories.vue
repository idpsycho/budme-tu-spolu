<template>
  <base-layout>
    <ion-grid style="max-width: 100vw;">
      <ion-row>
        <ion-col>
          <table style="width: 100%; margin: auto;">
              <tr>
                <td style="width: 75vw;">
                  <a class="back-to-feed">&lt; Back to feed</a>
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
    <ion-grid style="height: 80%">
      <div style="height: 65%;" v-if="categories != null">
        <router-link v-for="category in notDoneCategories" :key="category.id" :to="{ path: '/categories/' + category.id + '/cards' }" class="a-category">
            <ion-row :style="{'background-color':  category.color }" class="ion-justify-content-center  ion-align-items-center row-category">
              {{ category.name }}
            </ion-row>
        </router-link>
      </div>
      <div style="height: 35%; padding-top: 25%;">
        <router-link :to="{name: 'Categories'}" class="a-category">
            <ion-row fake :style="{'background-color':  `#19EE88` }" class="ion-justify-content-center ion-align-items-center how-to-play">
                HOW TO PLAY
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
  line-height: 3.3vh;
}

.a-category {
    text-decoration: none;
    color: black;
    font-size: 5vw;
  }
  .row-category {
    height: 25%;
    margin: 3vw;
  }

  .how-to-play {
    height: 12vh;
    margin: 3vw;
  }

.back-to-feed {
  text-decoration: none;
  color: black; 
  font-weight: bold; 
  font-size: 5vw;
  line-height: 3.3vh;
  margin-left: 3vw;
}
</style>