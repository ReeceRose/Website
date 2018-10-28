<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
    name: 'App',
    components: {
        Home
    }
}
</script>


<style lang="scss">
* {
    padding: 0;
    margin: 0;
}
html,
body {
    height: 100%;
}
body {
    position: relative;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: #6c6f73;
}
</style>
