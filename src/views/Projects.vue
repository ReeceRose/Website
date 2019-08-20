<template>
  <section id="Projects" class="svg-background">
    <Navigation/>
    <div class="container">
      <div v-if="selectedProjectIndex != null && String($route.params.project.toLowerCase()) != null && projects[selectedProjectIndex].name.toLowerCase().replace(/ /g, '') == String($route.params.project).toLowerCase().replace(/ /g, '')">
        <DetailedProject
          :project="projects[selectedProjectIndex]"
        />
      </div>
      <div v-else class="section-background text-center">
        <h1>My Projects</h1>
        <hr>
        <div class="row justify-content-center">
          <div v-for="(project, index) in projects" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 projects">
            <TileProject 
              :title="project.name"
              :display_image="project.display_image" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TileProject from '@/components/Projects/TileProject.vue'
import DetailedProject from '@/components/Projects/DetailedProject'

export default {
  name: 'Projects',
  components: {
    Navigation,
    TileProject,
    DetailedProject
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects
    },
    selectedProjectIndex() {
      if (this.$route.params.project == null) return null
      let projectName = this.$route.params.project
      for (let index = 0; index < this.projects.length; index++) {
          if (this.projects[index].name.toLowerCase().replace(/ /g, '') == projectName.toLowerCase().replace(/ /g, '')) return index;
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
.projects {
  padding: 5px;
}
</style>
