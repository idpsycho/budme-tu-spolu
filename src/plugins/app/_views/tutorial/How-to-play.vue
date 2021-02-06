<template>
  <base-layout>
    <ion-grid style="max-width: 100vw;">
      <ion-row>
        <ion-col>
          <table style="width: 100%;">
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
    <ion-grid>
        <h2 class="select-category">Select category</h2>
    </ion-grid>
  </base-layout>
</template>

<script>
import { IonGrid, IonRow } from '@ionic/vue';

export default {
  components: {
    IonGrid,
    IonRow,
  },
}
</script>

<style scoped>
.back-to-feed {
  text-decoration: none;
  color: black; 
  font-weight: bold; 
  font-size: 5vw;
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

</style>