<template>
    <div id="App">
        <Navigation/>
        <router-view/>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Home from '@/views/Home'

export default {
    name: 'App',
    components: {
        Navigation,
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
