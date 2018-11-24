<template>
    <div id="App">
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
    max-width: 100vw;
}
body {
    position: relative;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: #22292f;
}
.svg-background {
    background-color: #fff;
    // Special thanks to: https://www.svgbackgrounds.com for the background!
    background-image: url("~@/assets/background.svg");
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    padding-bottom: 25px;
}
.section-background {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    background-color: rgba(255, 255, 250, 1);
    padding: 20px;
}
.title {
    font-weight: 700;
}
.description {
    font-size: 1.25em;
}
</style>
