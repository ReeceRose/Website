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
.svg-background {
    background-color: #fff;
    // Special thanks to: https://www.svgbackgrounds.com for the background!
    background-image: url("~@/assets/background.svg");
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    padding-bottom: 25px;
}
.section-background {
    border-radius: 20px;
    background-color: rgba(255, 255, 250, 0.7);
    // background-color: rgba(254, 216, 183, 0.85);
    padding: 20px;
    // Add this for mobile
    // max-width: 95%;
}
.title {
    font-weight: 700;
}
.description {
    font-size: 1.25em;
}
</style>
