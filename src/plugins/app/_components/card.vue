<template>
    <div class="card-wrapper" :style="`background-color: ${card?.category?.color}`">
        <ion-row>
            <ion-col size="12">
                <div class="card-activity">
                    {{card.activity}}
                </div>
                <div class="card-text">
                    {{card.description}}
                </div> 
            </ion-col>
        </ion-row>
        <ion-row class="count-text">
            <ion-col size="12">
                <p> {{countString}} </p>
            </ion-col>
        </ion-row>
    </div>
</template>

<script>
export default {
    props:{
        card: {
            required: true,
            type: Object
        },
        countString:{
            required: false,
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.card-wrapper{
    position: relative;
    border: 2.75px solid black;
    height: 550px;
    border-radius: 16px;
    margin: 0 1em 0 1em;
    text-align: left;
}
.card-activity{
    font-size: 24px;
    margin-top: 1.2em;
    margin-left: 15px; 

}
.card-text {
    font-size: 32px;
    font-weight: 700;
    margin-top: 1.2em;
    margin-left: 15px; 
}
.count-text{
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-left: 15px; 
}
</style>