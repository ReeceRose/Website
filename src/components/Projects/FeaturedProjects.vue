<template>
  <div class="row justify-content-center">
    <div v-for="(project, index) in projects" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 projects">
      <TileProject
        v-if="project.featured"
        :title="project.name"
        :display_image="project.display_image" 
        class="project"
      />
    </div>
  </div>
</template>

<script>
import TileProject from '@/components/Projects/TileProject.vue'

export default {
  name: 'FeaturedProjects',
  components: {
    TileProject
  },
  computed: {
    projects() {
      let projects = this.$store.getters.getProjects
      let featured = []
      projects.forEach(project => {
        if (project.featured) featured.push(project)
      });
      return featured
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/colors.scss";

.projects {
  padding: 5px;
}
</style>
