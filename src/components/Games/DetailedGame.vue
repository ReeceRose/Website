<template>
  <section id="Game">
    <div class="section-background text-center">
      <img class="img-fluid" :src="game.display_image" :alt="game.name">
      <h1 class="title">{{ game.name }}</h1>
      <p class="description">{{ game.description }}</p>
      <div class="row justify-content-center">
        <a v-if="game.live_link != ''"  :href="game.live_link" class="btn btn-primary" target="_blank">Demo</a>
        <a v-else class="btn btn-primary disabled white">Demo not available</a>
      </div>
      <div class="row justify-content-center pt-2">
        <a v-if="game.trello_link != ''"  :href="game.trello_link" class="btn btn-primary" target="_blank">Trello</a>
      </div>
      <div class="row justify-content-center">
        <div class="extra-padding">
          <a v-if="game.open_source" :href="game.source_link" target="_blank">
            <i class="fas fa-code-branch"></i>
            View source
          </a>
          <a v-else class="disabled">
            <i class="fas fa-eye"></i>
            Source is private
          </a>
        </div>
    </div>
    <h4>Technologies used</h4>
    <div class="row justify-content-center">
      <span v-for="(icon, iconIndex) in game.icons" :key="iconIndex" class="icons" :title="icon.name">
        <div class="iconName">{{icon.name}}</div>
        <i :class="icon.faIcon" class="fa-2x fa-fw"></i>
      </span>
    </div>
    <h4>My Role</h4>
    <div class="row">
      <div class="col-8 offset-2">
        <p>{{ game.my_role }}</p>
      </div>
    </div>
    <h4>Game Difficulties</h4>
    <div class="row">
      <div class="col-8 offset-2">
        <p>{{ game.difficulties }}</p>
      </div>
    </div>
    <h4>My Solution</h4>
    <div class="row">
      <div class="col-8 offset-2">
        <p>{{ game.solution }}</p>
      </div>
    </div>
    <h4>Notable Features</h4>
    <div class="row">
      <ul class="col-8 offset-2">
        <li v-for="(feature, index) in game.features" :key="index">- {{ feature }}</li>
      </ul>
    </div>
    <div v-if="game.blogPost">
      <h4>More information <a :href="game.blogPost" target="_blank">here</a></h4>
    </div>
    <h4>Images</h4>
    <div class="row p-3">
        <div v-for="(image, index) in game.images" :key="index" class="col-lg-3 col-md-4 col-sm-6 pb-4 games border pointer" @click="toggleModal(index)">
            <img :src="image.link" :alt="image.title" :title="image.description" class="img-fluid rounded">
        </div>
        <div class="modal" v-if="displayModal">
          <div class="modal-header">
            <button class="close text-white" @click="displayModal = false">&times;</button>
          </div>
          <div class="modal-body text-center">
            <div class="carousel slide" data-interval="false" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item" v-for="(image, imageIndex) in game.images" :key="imageIndex" :class="imageIndex == currentImage ? 'active' : ''">                            
                  <h3 class="text-center text-white">{{ image.title }}</h3>
                  <img :src="image.link" :alt="image.title" class="image-modal">
                </div>
              </div>
              <a class="carousel-control-prev" @click="previouseSlide">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" @click="nextSlide">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailedGame',
  props: {
    game: Object
  },
  data() {
    return {
      displayModal: false,
      currentImage: 0,
    }
  },
  methods: {
    toggleModal(imageIndex) {
      this.displayModal = !this.displayModal
      this.currentImage = imageIndex
    },
    nextSlide() {
      if (this.currentImage >= this.game.images.length - 1) {
        this.currentImage = 0
      } else {
        this.currentImage++
      }
    },
    previouseSlide() {
      if (this.currentImage <= 0) {
        this.currentImage = this.game.images.length - 1
      } else {
        this.currentImage--
      }
    },
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.displayModal = false
      } else if (e.keyCode === 37) {
        this.previouseSlide();
      } else if (e.keyCode === 39) {
        this.nextSlide()
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.title {
  margin-top: 25px;
  margin-bottom: 25px;
}
.white {
  color: #fff !important;
}
.col-8 {
  font-size: 0.85rem;
}
ul {
  list-style: none;
}
.icons {
  padding: 0 10px 25px 10px;
    
  .iconName {
    visibility: hidden;
  }

  &:hover {
    color: get-color(primaryBlue);
  }

  &:hover > .iconName {
    visibility: visible;
  }
}
.extra-padding{
  padding: 5px 0 25px 0;
}
.pointer {
  cursor: pointer;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9);

  .modal-header {
    border: none;
  }

  .image-modal {
    width: 75vw;
    height: auto;
    max-height: 90vh;
  }
}
</style>