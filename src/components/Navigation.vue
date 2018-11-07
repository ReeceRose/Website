<template>
    <section id="Navigation">
        <nav class="navbar navbar-expand-md navbar-dark"> 
            <router-link class="navbar-brand" to="/">Reece Rose</router-link> 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRight">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarRight"> 
                <ul class="navbar-nav ml-auto"> 
                    <li class="nav-item"> 
                        <router-link class="nav-link" to="/#About">About</router-link> 
                    </li> 
                    <li class="nav-item"> 
                        <router-link class="nav-link" to="/#Projects">Projects</router-link>
                    </li> 
                    <li class="nav-item"> 
                        <router-link class="nav-link" to="/#Contact">Contact</router-link>
                    </li> 
                </ul>
            </div> 
        </nav> 
    </section>
</template>

<script>
export default 
{
    name: 'Navigation'
}
</script>

<style lang="scss">
.navbar-dark 
{
    padding-top: 0;
    .navbar-nav {
        .nav-link {
            color: #22292f;
            font-size: 1.2em;
            font-weight: 700;
        }
        .nav-link:hover {
            color: #4e5358;
        }
    }
    .navbar-brand {
        font-size: 2em;
        font-weight: 800;
        color: #22292f;
    }
    .navbar-brand:hover {
        color: #4e5358;
    }
}
</style>