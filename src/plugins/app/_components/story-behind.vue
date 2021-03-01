<template>
    <div class="wrapper" :style="`background: ${card.story_color};`">
        <img src="https://media.gq.com/photos/5df00d5bd0a40200081edefa/3:2/w_1686,h_1124,c_limit/SHORTY-final-i-hope.jpg">
        <h2>{{card.story_text}}</h2>
        <div class="close-icon">
            <ion-icon :icon="closeCircleOutline" @click="closeStory"></ion-icon>
        </div>
    </div>
</template>

<script>
import { closeCircleOutline } from 'ionicons/icons'
import { modalController } from '@ionic/vue'


export default {
    props:{
        card:{
            type: Object,
            required: true
        }
    },
    setup(){
        return{
            closeCircleOutline
        }
    },
    methods:{
        closeStory(){
            modalController.dismiss()
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 100vh;
    text-align: center;
    position: relative;
}
.wrapper img{
    border-radius: 22px;
    padding: 10px;
    margin-top: 40px;
    height: 400px;
    width: 100%;
}
.wrapper h2{
    text-align: left;
    color: white;
    font-weight: 700;
    padding: 10px;
}
.close-icon{
    position: absolute;
    bottom: 5%;
    color: #FFDB2C;
    font-size: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>