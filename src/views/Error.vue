<template>
  <section id="Error" class="svg-background">
    <Navigation/>
    <div class="container text-center mt-3">
      <h1 class="name">Error: {{ error }}</h1>
      <h4 class="description">Believe this is an issue? Contact <a href="mailto:reecerose18@gmail.com">reecerose18@gmail.com</a> and provide this error</h4>
      <br>
      <router-link to="/" class="btn btn-light">Return home</router-link>
    </div>
  </section>
</template>


<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'Error',
  data() {
    return {
      error: this.$route.params.error || 'Unknown'
    }
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
.name {
  font-weight: 800;
  font-size: 3.5em;
  padding-bottom: 30px;
  color: #22292f;
}
.description {
  font-weight: 600;
  padding-bottom: 25px;
  color: #22292f;
  a {
      color: #fff;
  }
}
</style>