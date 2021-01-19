<template>
  <base-layout screen-title = "Kategórie" go-back-link="/">
    <ion-grid style="height: 100%">
        <div style="height: 60%;">
          <router-link v-for="category in categories" :key="category.id" :to="{ path: '/categories/' + category.id + '/cards' }" class="a-category">
              <ion-row :style="{'background-color':  category.color }" class="ion-justify-content-center  ion-align-items-center row-category">
                  {{ category.name }}
              </ion-row>
          </router-link>
        </div>
        <div style="height: 40%; padding-top: 25%;">
          <router-link to="/categories/tutorial" class="a-category">
              <ion-row fake kfja :style="{'background-color':  `#41DC63` }"  class="ion-justify-content-center  ion-align-items-center row-category">
                  Tutorial
              </ion-row>
          </router-link>
          <router-link to="/my-feeds" class="a-category">
              <ion-row fake :style="{'background-color':  `#19EE88` }" class="ion-justify-content-center ion-align-items-center row-category">
                  Môj Feed
              </ion-row>
          </router-link>
        </div>
    </ion-grid>
  </base-layout>
</template>

<script>
  import {
    IonGrid,
    IonRow,
    IonButton,
  } from '@ionic/vue';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

  export default {
    name: 'Categories',
    components: {
      IonGrid,
      IonRow,
    },
    data() {
      return {
        categories: []
      }
    },
    async mounted() {
      let x = [];
      Storage.get({ key: 'CampaignData' })
      .then(
        response => {response = JSON.parse(response.value).data;
          response.cards.forEach(element => {
          if (!x.includes(element.category.id)) {
            x.push(element.category)
          }
        }),
          this.categories =
          Array.from(new Set(x.map(a => a.id)))
            .map(id => {
            return x.find(a => a.id=== id);
          })
        }
      )
    },
  };
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

  .a-category {
    text-decoration: none;
    color: black;
    font-size: 30px;
    font-weight: 300;
    font-family: 'Rubik', sans-serif;
  }
  .row-category {
    height: 25%;
    margin: 10px;
  }
  [fake] {
    opacity: 0.2;
}
</style>
