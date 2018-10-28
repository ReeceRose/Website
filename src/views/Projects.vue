<template>
    <div class="Projects">
        <Navigation/>
        <div>
            {{ json }}
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