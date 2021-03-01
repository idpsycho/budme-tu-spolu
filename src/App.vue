<!-- Handles browser refresh -->
<template>
  <ion-app>
    <ion-router-outlet v-if="!loading" :key="$route.fullPath"/>
    <div class="loader" v-else>
      <ion-spinner name="crescent"></ion-spinner>
    </div>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonSpinner } from '@ionic/vue';

export default {
  components: {
    IonApp,
    IonRouterOutlet,
    IonSpinner
  },
  data(){
    return{
      loading: true
    }
  },
  async mounted(){
    await this.$store.dispatch('offline/loadCampainCategories')
    this.loading = false
  }
}
</script>
<style scoped>
.loader{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFDB2C;
}
</style>
