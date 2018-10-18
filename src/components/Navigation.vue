<template>
    <div class="Navigation">
        <nav>
            <h1>Reece Rose</h1>
        </nav>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/Projects">Projects</router-link>
        </div>
    </div>
</template>

<script>
export default 
{
    name: 'Navigation',
    props: {

    }
}
</script>

<style scoped lang="scss">
    $blue: red;
    nav {
        h1 {
            color: $blue;
        }
    }
</style>