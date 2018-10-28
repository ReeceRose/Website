<template>
    <div class="Projects mt-5">
        <div v-for="(project, index) in json.projects" :key="index">
            {{ project.name }}
            <div v-for="(image, imageIndex) in project.images" :key="imageIndex">
                {{ image.title }}
            </div>            
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Projects from '@/assets/projects.json'
export default {
    name: 'Projects',
    components: {
        Navigation
    },
    data () {
        return {
            json: Projects
        }
    }
}
</script>