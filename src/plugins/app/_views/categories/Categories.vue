<template>
<!-- ToDo: Pozriet vue-layout package -->

  <base-layout screen-title = "Kategórie" go-back-link="/">
    <ion-grid style="height: 100%">
      <div style="height: 60%;" v-if="categories != null">
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
// ToDo: IonGrid a row includnut globalne (v main.js)
// ToDo: ; do prdele
// ToDo: ODPORUCANIE: w@tip/no-semis
// ToDo: Spravit si funkcie do $storu, napr. get cardsByCategory()


  export default {
    data() {
      return {
        categories: this.$store.getters.getCategories
      }
    },
    async mounted() {
      // let doneCategories = [];
      // await Storage.get({ key: 'isCategoryDone' }).then(resp => { if (resp.value != null) { doneCategories = resp.value.split(','); }});
      // doneCategories = doneCategories.map(el=>parseInt(el));

      if (this.categories[0] == null) {
        this.$router.push({name: 'Nextdeck'})
      }
    },
  };
</script>

<style scoped>
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
</style>
