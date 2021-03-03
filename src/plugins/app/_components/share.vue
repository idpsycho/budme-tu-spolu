<template>
    <div class="wrapper ion-padding" :style="`background: ${card.category.color};`">
        <h1>Add to feed</h1>
        <h3>Share what you experienced during the gameplay to the feed on the Homepage</h3>
        <div class="buttons">
            <ion-button :style="`color: ${card.category.color}`" @click="addPhoto">Open camera</ion-button>
            <ion-button :style="`color: ${card.category.color}`" @click="openPostShareModal">Write a text post</ion-button>
        </div>
        <ion-button class="back-button" @click="closeModal">Back to the card</ion-button>
    </div>
</template>

<script>
import { modalController } from '@ionic/vue'
import {  
    Plugins,  
    CameraSource,  
    CameraResultType
} from "@capacitor/core";


import PostShare from './post-share.vue'


export default {
    props:{
        card: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            photoWebPath: ''
        }
    },
    methods:{
        closeModal(){
            modalController.dismiss()    
        },
        openCamera(){

        },
        async addPhoto(){
            const {Camera} = Plugins
            try {
            const photo = await Camera.getPhoto({
                quality: 60,
                resultType: CameraResultType.Uri,            
                source: CameraSource.Prompt
            });
            
            this.photoWebPath = photo.webPath
            this.openPostShareModal()

            } catch (error) {
                console.error(error)
            }
        },
        async openPostShareModal(){
            const modal = await modalController
            .create({
                component: PostShare,
                componentProps: {
                    card: this.card,
                    photo: this.photoWebPath
                },
            })
            modal.present();
            const {data} = await modal.onDidDismiss()
            if(data.postShared) modalController.dismiss({postShared: true})

        },
    }
    
}
</script>

<style>
.wrapper{
    height: 100vh;
}
.wrapper h1{
    font-weight: 700;
}
.wrapper h3{
    font-weight: 500;
    margin-top: 40px;
    margin-bottom: 40px;
}
ion-button{
    font-weight: 700;
}
.buttons{
    display: flex;
    flex-direction: column;
    
}
.buttons ion-button{
    height: 64px;
    --background: black;
    margin-bottom: 40px;
}
.back-button{
    position: absolute;
    bottom: 10%;
    width: 92%;
    height: 64px;
    --background: none;
    border: 2.75px solid black;
    border-radius: 16px;
    color: black
}

</style>