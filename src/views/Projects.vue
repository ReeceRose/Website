<template>
    <section id="Project">
        <div class="svg-background">
            <div class="container">
                <div v-if="$route.params.project != null">
                    <DetailedProject
                        :project="json.projects[$route.params.project]"
                    />
                </div>
                <div v-else>
                    <div class="row">
                        <div v-for="(project, index) in json.projects" :key="index" class="col-4">
                            <TileProject 
                                :title="project.name"
                                :display_image="project.display_image" 
                            />
                        </div>
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

<style>
.container {
    padding-top: 100px;
}
.col-4 {
    padding: 5px;
}
</style>
