<template>
    <base-layout screen-title = "Deck možnosť"> 
        <ion-grid class="grid1">
            <table style="width: 100%; text-align: right; font-size: 7vw;">
                <tr>
                    <td style="padding: 3vw;">
                        &#10005;
                    </td>
                </tr>
            </table>
        </ion-grid>
        <ion-grid class="grid2">
            <div class="a-category">
                <ion-row class="ion-justify-content-center ion-align-items-center end-of-deck-text">
                    End of deck
                </ion-row>
                <ion-row class="ion-justify-content-center ion-align-items-center end-of-deck">
                    Play skipped cards
                </ion-row>
                <ion-row class="ion-justify-content-center ion-align-items-center end-of-deck">
                    Switch category
                </ion-row>
            </div>
        </ion-grid>
    </base-layout>
</template>


<script>
import { IonButton } from '@ionic/vue';

export default {
  components: {

  },
};
</script>

<style scoped>
.my-button {
  font-size: 5vw;
  background-color: #C4C4C4;
  margin: 3vw;
  height: 11vh;
  padding: 5vw;
  color: black;
}
ion-button {
  text-transform: none;
  border-radius: 0px;
}

.a-category {
    text-decoration: none;
    color: black;
    font-size: 5vw;
  }

  .end-of-deck {
    height: 15vh;
    margin: 5vw 3vw 5vw 3vw;
    background: #C4C4C4;
    color: black;
  }
  .end-of-deck-text {
    height: 15vh;
    margin: 5vw 3vw 5vw 3vw;
    color: black;
    font-size: 5vw;
    font-weight: bold;
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