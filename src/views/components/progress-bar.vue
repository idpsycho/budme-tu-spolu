<template>
  
  <ion-item v-for="category in categories" :key="category.id">
      <ion-progress-bar :value="category.value"></ion-progress-bar>
  </ion-item>

</template>

<script>
import axios from 'axios'
import { IonItem, IonProgressBar } from '@ionic/vue';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export default {
  name: 'progress-bar',
  components: {
    IonItem,
    IonProgressBar
  },
  data() {
    return {
      categories: [],
      allCardsIds: [],
    }
  },
  async mounted() {
      let x = [];

      //This get all data about campaign and filter categories
    await Storage.get({ key: 'campaignData' })
      .then(
        response => {response = JSON.parse(response.value).data;
        this.allCards = response.cards;
        response.cards.forEach(element => {
            if (!x.includes(element.category.id)) {
                x.push(element.category)
            }
        });
        this.categories =
          Array.from(new Set(x.map(a => a.id)))
          .map(id => {
          return x.find(a => a.id === id);
        });
      });

      for(let i = 0; i <= this.categories.length - 1; i++) {
        let z = null;
        
        let response = await Storage.get({ key: 'campaignData' })
        response = JSON.parse(response.value).data;
        this.categories[i].allCardsValue = response.cards.filter(element => element.category.id == this.categories[i].id).length;
        

        let acceptedCards = await Storage.get({ key: 'isCardAccepted' });
        let declinedCards = await Storage.get({ key: 'isCardDeclined' });

        this.allCardsIds = acceptedCards.value + ',' + declinedCards.value;
        this.allCardsIds = this.allCardsIds.split(',');
        this.allCardsIds = this.allCardsIds.map(el=>parseInt(el));
        this.allCardsIds = this.allCardsIds.sort();

        // cards.id in this.allCardsIds and belongs to this.categories[i].id
        let y = [];
        console.log(this.allCardsIds)
        for (let j = 0; j <= this.allCardsIds.length - 1; j++) {        
          // let allcardsIds = this.allCardsIds;
          response.cards.forEach(el => 
          { if (el.id == this.allCardsIds[j] && el.category.id == this.categories[i].id) {
            y.push([]);
          }})
            
        }
        console.log(y.length)
        this.categories[i].value = (this.categories[i].allCardsValue / 100) * y.length
        
        // y = []
      }
  }
}
</script>
