<template>
  <section id="Games" class="svg-background">
    <Navigation/>
    <div class="container">
      <div v-if="selectedGameIndex != null && String($route.params.game.toLowerCase()) != null && games[selectedGameIndex].name.toLowerCase().replace(/ /g, '') == String($route.params.game).toLowerCase().replace(/ /g, '')">
        <DetailedGame
          :game="games[selectedGameIndex]"
        />
      </div>
      <div v-else class="section-background text-center">
        <h1>My Games</h1>
        <hr>
        <div class="row justify-content-center">
          <div v-for="(game, index) in games" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 games">
            <TileGame 
              :title="game.name"
              :display_image="game.display_image" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TileGame from '@/components/Games/TileGame.vue'
import DetailedGame from '@/components/Games/DetailedGame'

export default {
  name: 'Games',
  components: {
    Navigation,
    TileGame,
    DetailedGame
  },
  computed: {
    games() {
      return this.$store.getters.getGames
    },
    selectedGameIndex() {
      if (this.$route.params.game == null) return null
      let gameName = this.$route.params.game
      for (let index = 0; index < this.games.length; index++) {
          if (this.games[index].name.toLowerCase().replace(/ /g, '') == gameName.toLowerCase().replace(/ /g, '')) return index;
      }
      return null
    }
  }
}
</script>

<style lang="scss">
.container {
  padding-top: 100px;
}
.games {
  padding: 5px;
}
</style>
