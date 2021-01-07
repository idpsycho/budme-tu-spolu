<template>
    <ion-grid>
        <router-link v-for="category in categories" :key="category.id" to="/category/{{ category.id }}" class="a-category">
            <ion-row :style="{background:  category.color }" class="ion-justify-content-center  ion-align-items-center row-category">
                {{ category.name }}
            </ion-row>
        </router-link>
    </ion-grid>
</template>

<script lang="ts">
import { IonGrid, IonRow } from '@ionic/vue';
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'Categories',
    components: {
        IonGrid,
        IonRow
    },
    setup () {
        const categories = ref<any>(null);
        
        onMounted( () => {
            axios.get("http://localhost:8000/api/v1/campaign/f1/categories").then(resp => {categories.value = resp.data});
        });
        
        return { categories }
    },
    
});
</script>

<style scoped>
    .a-category {
        text-decoration: none;
        color: black;
        font-size: 30px;
    }
    .row-category {
        width: 100%;
        height: 25vh;
    }
</style>
