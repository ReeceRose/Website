<template>
  <div class="row justify-content-center">
    <div v-for="(game, index) in games" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 games">
      <TileGame
        v-if="game.featured"
        :title="game.name"
        :display_image="game.display_image" 
        class="game"
      />
    </div>
  </div>
</template>

<script>
import TileGame from '@/components/Games/TileGame.vue'

export default {
  name: 'FeaturedGames',
  components: {
    TileGame
  },
  computed: {
    games() {
      let games = this.$store.getters.getGames
      let featured = []
      games.forEach(game => {
        if (game.featured) featured.push(game)
      });
      return featured
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/colors.scss";

.games {
  padding: 5px;
}
</style>
