<template>
  <ion-page>
    <ion-content>
      <ion-grid class="bg-image">
        <ion-toolbar class="header">
        <ion-row>
          <ion-col size="8">
            <ion-row style="margin: 3vh 3vw 0vh 3vw">
            <img class="icon-header" src="/assets/icon/arrow-left.png" @click="$router.push({name:'Landing'})">
            <div class="text-header font" @click="$router.push({name:'Landing'})">
            HOME
            </div>
            </ion-row>
          </ion-col>
          <ion-col size="4">
            <ion-button color="dark" class="play-button" @click="$router.push({name:'Categories'})">
              PLAY
            </ion-button>
          </ion-col>
        </ion-row>
        </ion-toolbar>
        <ion-row>
          <ion-col size="12">
            <div class="caption-main-small font">
              BEEN THERE TOGETHER:
            </div>
            <div class="caption-main-big font">
              Karetní hra, kterou hravě prozkoumáš své okolí
            </div>
            <div class="caption-second font">
              <h5>Přijmout výzvu v podobě otázek a úkolů a poznat místa a lidi kolem sebe. Ve spolupráci s domem Umění města Brna chceme oslavit 110. výročí TÉTO významné budovy a připravili jsme si pro vás hru na míru pro toto místo.</h5>
              <h5>Ve hře najdeš balíček karet s výzvami v 4 různobarevných kategoriích. Přes žluté karty spoznávej prostor a uvažuj o své existenci v něm. V zelených interaguj s tým co vidíš a zažívají, nakolik dokážeš ovlivňuje to co se kolem tebe děje? V modré kategorií najdeš podněty na rozhovor s lidmi, které vidíš a v červené se odvaž spolupracovat</h5>
              <h5>Tato verze hry je speciálně věnována DUMB. Hrajte se spolu s Domem umění a objevujte jeho zákoutí přes BEEN THERE TOGETHER.</h5>
              <img style="width: 100%" src="/assets/dom-umenia.png">
              <h3>O domě umění města Brna</h3>
              <h5>Dům umění města Brna je součástí brněnské kultury již více než sto let; dnes se výrazně orientuje na současné umění. Dům umění města Brna je otevřená moderní instituce, která zprostředkovává a podněcuje kontakt mezi umělci a veřejností. Jeho ambicí je stát se dynamickým prostorem zapojeným do sítě prestižních evropských galerií. Jde o jednu kulturní instituci se dvěma výstavními domy a třemi galerijními prostory. Viac o hre zistíte na webstránke: <a href="http://www.dum-umeni.cz/">http://www.dum-umeni.cz/</a></h5>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

.font {
  font-family: 'IBM Plex Sans', sans-serif;
}

.logo {
  font-size: 4vw;
  color: black;
  margin: 2vh 3vw 0vh 3vw;
  font-weight: bolder;
}

.icon-header {
 height: 5vw;
}

.text-header {
      font-size: 4vw;
      font-weight: bold;
      margin-left: 2vw;
}

.play-button {
  color: white;
  margin: 3vh 3vw 0vh 3vw;
  height: 12vw;
  width: 20vw;
  font-size: 3vw;
}

.caption-main-small {
  font-weight: 700;
  font-size: 5vw;
  padding: 5vh 3vw 1vh 3vw;
}
.caption-main-big{
  font-weight: 700;
  font-size: 12vw;
  padding: 1vh 3vw 5vh 3vw;
}

.caption-second {
  padding: 5vh 3vw 5vh 3vw;
}
.bg-image {
    min-height: 100vh;
    background: url(/assets/pozadie2.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 0px;
}

.btn-try-it-out {
  margin: 3vh 1vw 3vh 1vw;
  height: 8vh;
  font-size: 5vw;
}

.caret-down {
  width: 10vw;
  display: flex;
  margin-left: auto;
  margin-right: auto
}
.header {
width: 100vw;
}

ion-button {
  text-transform: none;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 700;
  
}
 </style>