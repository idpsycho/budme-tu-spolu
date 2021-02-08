<template>
<base-layout>
<ion-grid style="max-width: 100vw;">
  <ion-row>
    <ion-col>
      <div class="landing-block">
        Been<br>There<br>Together
      </div>
    </ion-col>
    <ion-col style="text-align:center">
        <ion-button href="http://www.beentheretogether.cards/" color="lightgray" class="landing-button1">Info</ion-button>
    </ion-col>
    <ion-col style="text-align:center">
        <ion-button color="black" class="landing-button2" >Play</ion-button>
    </ion-col>
  </ion-row>
</ion-grid>
<ion-grid>
  <ion-col style="text-align:center">
    <ion-list lines="none">
      <ion-item v-for="item in items" :key="item.src">             <!-- riadok 21 az 30 treba upravit tie {{ item. }} je to tam len pre to aby sa mi to lahsie stylovalo (Mario) -->
        <ion-card style="width: 100vw; border-radius: 0px;">
          <ion-img :src="item.src"></ion-img>
            <table style="width: 100%">
              <tr>
                <td><h2 class="card-text1">{{item.username}}</h2></td> 
                <td><h2 class="card-text2">{{item.date}}</h2></td>
              </tr>   
            </table>
              <ion-card-content style="padding-top: 0px; font-size: 4vw;">{{item.text}}</ion-card-content>
        </ion-card>
      </ion-item>
    </ion-list>
  </ion-col>
</ion-grid>
</base-layout>
</template>

<script>
import { IonImg, IonItem, IonButton, IonCard, IonCardContent, IonRow, IonList } from '@ionic/vue';

export default ({
  components: { IonImg, IonItem, IonButton, IonCard, IonCardContent, IonRow, IonList },
  setup() {
    const items = [{           // Toto je len na to aby som pri stylovani si vedel predstavit ako to bude vyzerat. Mozete v pohode vymazat od riadku 44 po 62 (Mario)
      'text': 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Pelle ntesque id odio turpis.',
      'src': '../assets/Test.jpg',
      'username': 'John Stone',
      'date': 'Today, 15:33'
    }, {
      'text': 'Curabitur pellentesque suscipit arcu vitae varius. Duis finibus sit amet sapien sit amet tempus. Sed pharetra arcu vitae velit varius placerat. Aenean nisi quam, feugiat non tristique vel, facilisis at metus.',
      'src': '../assets/Test.jpg',
      'username': 'Ponnappa Priya',
      'date': 'Yesterday, 15:33'
    }, {
      'text': 'Integer tempor lorem dapibus erat ornare, quis condimentum nunc tincidunt. Nulla vel faucibus ex, at vestibulum mauris. Phasellus dignissim diam et justo elementum, sed condimentum libero placerat.',
      'src': '../assets/Test.jpg',
      'username': 'Tarryn Campbell-Gillies',
      'date': '19/01/21'
    }];
    return { items }
  }
});
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

.landing-button1 {
  height: 10vh;
  width: 25vw;
  font-size: 5vw;
  background-color: lightgray;
  color: black;
  margin: auto;
  border-radius: 0;
}

.landing-button2 {
  height: 10vh;
  width: 25vw;
  font-size: 5vw;
  background-color:black;
  color: white;
  margin: auto;
  border-radius: 0;
}

.card-text1 {
  font-size: 3vw; 
  padding: 0px 20px 0px 20px; 
  line-height: 2vh;
}

.card-text2 {
  font-size: 3vw; 
  line-height: 1vh; 
  text-align: right;
  padding: 0px 20px 0px 20px; 
 }

ion-button {
  text-transform: none;
}
 </style>
