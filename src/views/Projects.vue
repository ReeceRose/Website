<template>
    <section id="Projects" class="svg-background">
        <Navigation/>
        <div class="container">
            <div v-if="$route.params.project != null && json.projects[$route.params.project] != null">
                <DetailedProject
                    :project="json.projects[$route.params.project]"
                />
            </div>
            <div v-else>
                <div class="row justify-content-center">
                    <div v-for="(project, index) in json.projects" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 projects">
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
import TileProject from '@/components/TileProject.vue'
import DetailedProject from '@/components/DetailedProject'
import Projects from '@/assets/projects.json'

export default {
    name: 'Projects',
    components: {
        Navigation,
        TileProject,
        DetailedProject
    },
    data () {
        return {
            json: Projects
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
