<template>
    <div class="wrapper ion-padding" :style="`background: ${card.category.color};`">
        <div class="header">
            <div class="back" @click="closeModal">
                <ion-icon :icon="arrowBackOutline"></ion-icon>
                <span>Back</span>
            </div>
        </div>
        <div class="image-placeholder" :style="`border: 2px black ${post.photo ? 'solid' : 'dotted'}`" @click="addPhoto">
            <div class="image" v-if="post.photo">
                <img :src="post.photo" >
                <ion-icon :icon="trashBinOutline" @click="clearPhoto"></ion-icon>
            </div>
            <ion-icon v-else class="add-icon" :icon="addOutline"></ion-icon>
        </div>
        <ion-item class="caption" lines="none" :style="`border: 2.75px solid ${post.text.length < 161 ? 'black' : 'red'}`">
            <ion-textarea rows="10"  placeholder="Tap to write a caption ..." v-model="post.text"></ion-textarea>
            <span>{{post.text.length}}/160</span>
        </ion-item>
        <ion-button @click="sharePost" :disabled="!post.text.length || !(post.text.length < 161)">Share</ion-button>
    </div>
</template>

<script>
import { modalController } from '@ionic/vue'
import { addOutline, trashBinOutline, arrowBackOutline } from 'ionicons/icons'
import {  
    Plugins,  
    CameraSource,  
    CameraResultType
} from "@capacitor/core";
import axios from 'axios';

export default {
    props:{
        card: {
            type: Object,
            required: true
        },
        photo:{
            type: String,
            required: false,
            default: ''
        }
    },
    setup(){
        return{
            addOutline,
            trashBinOutline,
            arrowBackOutline
        }
    },
    mounted(){
        this.post.photo = this.photo
    },
    data(){
        return{
            post:{
                photo: null,
                text: ''
            }
        }
    },
    methods:{
        async addPhoto(){
            if(this.post.photo) return

            const {Camera} = Plugins
            try {
            const photo = await Camera.getPhoto({
                quality: 60,
                resultType: CameraResultType.Uri,            
                source: CameraSource.Prompt
            });
            
            this.post.photo = photo.webPath

            } catch (error) {
                console.error(error)
            }
        },
        clearPhoto(e){
            e.stopPropagation()
            this.post.photo = null
        },
        closeModal(){
            modalController.dismiss({postShared: false})    
        },
        async sharePost(){
            let postData = new FormData()
            let photoBlob = {};
            if(this.post.photo){
                photoBlob = await fetch(this.post.photo).then(r => r.blob())
                postData.append('image', photoBlob)
            }
            postData.append('caption', this.post.text)
            postData.append('card_id', this.card.id)
            postData.append('is_public', 1)
            postData.append('title', this.post.text)

            await axios.post('https://budme-tu-spolu-admin.hybridlab.dev/api/v1/feed', postData)

            modalController.dismiss({postShared: true})
        }
    }
    
}
</script>

<style>
.wrapper{
    height: 100vh;
}
.image-placeholder{
    position: relative;
    height: 243px;
    border-radius: 12px;
    padding:0;
    margin-top: 10%;
}
.image-placeholder img{
    width: 100%;
    height: 239px;
    border-radius: 12px;
}
.add-icon{
    position: absolute;
    font-size: 60px;
    width: 100%;
    top: calc(50% - 30px);
}
.image{
    position: relative;
}
.image ion-icon{
    position: absolute;
    font-size: 30px;
    bottom: 5%;
    right: 5%;
}
.back{
    height: 40px;
}
.back span{
    display: inline;
    font-weight: 700;
    margin-left: 10px;
}
.back ion-icon{
    font-size: 20px;
}
.caption{
    position: relative;
    height: 160px;
    border: 2.75px solid black;
    border-radius: 12px;
    margin-top: 50px;
}
.caption ion-textarea{
    height: auto;
    border-radius: 12px;
}
.caption span{
    position: absolute;
    bottom: 90px;
    right: 20px;
}
ion-button{
    height: 64px;
    --background: black;
    margin-top: 40px;
    width: 100%;
}
</style>