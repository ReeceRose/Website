<template>
    <div class="Home">
        <Navigation/>
        <div class="svg-background">
            <div class="header">
                <h1 class="main-header">Hi, my name is Reece Rose</h1>
            </div>
            <div class="footer">
                <a href="#About" class="btn btn-lg btn-dark rounded-circle bottom-screen" id="btn-down"><i class="fas fa-angle-double-down"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
    name: 'Home',
    components: {
        Navigation
    }
}
</script>

<style lang="scss" scoped>
.svg-background {
    background-color: #fff;
    // Special thanks to: https://www.svgbackgrounds.com for the background!
    background-image: url("~@/assets/background.svg");
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content:center;
    align-items:center;

    .main-header {
        font-weight: 700;
        color: #fff;
    }
    .footer {
        text-align: center;
        align-self: flex-end;
    }
}
</style>