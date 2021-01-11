<template>
    <ion-grid>
        <router-link v-for="category in categories" :key="category.id" to="/category/{{ category.id }}" class="a-category">
            <ion-row :style="{'background-color':  category.color }" class="ion-justify-content-center  ion-align-items-center row-category">
                {{ category.name }}
            </ion-row>
        </router-link>
        <router-link to="/tutorial" class="a-category">
            <ion-row :style="{'background-color':  `#41DC63` }"  class="ion-justify-content-center  ion-align-items-center row-category">
                Tutorial
            </ion-row>
        </router-link>
        <router-link to="/my-feeds" class="a-category">
            <ion-row :style="{'background-color':  `#19EE88` }" class="ion-justify-content-center ion-align-items-center row-category">
                Môj Feed
            </ion-row>
        </router-link>
    </ion-grid>
</template>

<script>
import { IonGrid, IonRow } from '@ionic/vue';
import axios from 'axios';

export default {
    name: 'Categories',
    components: {
        IonGrid,
        IonRow
    },
    data() {
      return {
        categories: {}
      }
    },
    created() {
      axios.get('http://localhost:8000/api/v1/campaign/f1/categories')
      .then(response => {
        this.categories = response.data
      })
    }
  };
</script>

<style scoped>
    .a-category {
        text-decoration: none;
        color: black;
        font-size: 30px;
    }
    .row-category {
        width: 100%;
    }
</style>
