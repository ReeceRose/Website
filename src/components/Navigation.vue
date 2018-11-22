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
$color: (
    main: #22292f,
    hover: #4e5358
);
.navbar-dark 
{
    padding-top: 0;
    .navbar-nav {
        .nav-link {
            color: map-get($map: $color, $key: main);
            font-size: 1.2em;
            font-weight: 700;
        }
        .nav-link:hover {
            color: map-get($map: $color, $key: hover);
        }
        .nav-link:focus {
            color: inherit;
        }
    }
    .navbar-brand {
        font-size: 2em;
        font-weight: 800;
        color: map-get($map: $color, $key: main);
    }
    .navbar-brand:hover {
        color: map-get($map: $color, $key: hover);
    }
    .navbar-brand:focus {
        color: inherit;
    }
}
</style>