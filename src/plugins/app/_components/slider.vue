<template>
  <!-- Pozriet si dokumentaciu a mozno pouzit nieco ine ako slider -->
  <!-- Spravit to bez effektov, iba klikanie na button, uplne bez slideru!!! -->
    <div v-for="card of renderedCard" :key="card" :style="{'background-color':  card.category.color }">
      {{card.id}}<br/>
      {{card.description}}<br/>
      {{card.hashtag}}<br/>
    </div>
</template>

<script>

export default {
  data() {
    return {
      cards: this.$store.getters.getCardsByCategory(this.categoryId),
      categoryId: this.$route.params.categoryId,
      currentCard: 0,
    }
  },
  mounted() {
    this.cards = this.$store.getters.getCardsByCategory(this.categoryId)
  },
  computed: {
    renderedCard() {
      return [this.cards[this.currentCard]]
    }
  },
}

// 0 = Fajka
// 2 = Krizik
</script>
