<template>
    <div class="row justify-content-center">
        <div v-for="(project, index) in json.projects" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 projects">
            <Project
                v-if="project.featured"
                :title="project.name"
                :display_image="project.display_image" 
                class="project"
            />
        </div>
    </div>
</template>

<script>
import Projects from '@/assets/projects.json'
import Project from '@/components/TileProject.vue'

export default {
    name: 'FeaturedProjects',
    components: {
        Projects,
        Project
    },
    data () {
        return {
            json: Projects
        }
    }
}
</script>


<style lang="scss" scoped>
.projects {
    padding: 5px;
}
</style>
