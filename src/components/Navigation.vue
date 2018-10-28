<template>
    <div class="Navigation">
        <section id="nav">
            <nav class="navbar navbar-expand-md fixed-top navbar-dark"> 
                <router-link class="navbar-brand" to="/">Reece Rose</router-link> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarRight">
                    <span class="navbar-toggler-icon">

                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarRight"> 
                    <ul class="navbar-nav ml-auto"> 
                        <li class="nav-item"> 
                            <router-link class="nav-link" to="/#About">About</router-link> 
                        </li> 
                        <li class="nav-item"> 
                            <router-link class="nav-link" to="/Projects">Projects</router-link>
                        </li> 
                        <li class="nav-item"> 
                            <a class="nav-link" href="/#Contact">Contact</a> 
                        </li> 
                    </ul>
                </div> 
            </nav> 
        </section>
    </div>
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
    .navbar-nav {
        .nav-link {
            color: #fff;
            font-size: 1.2em;
        }
        .nav-link:hover {
            color: #eee;
        }
    }
    .navbar-brand {
        font-size: 1.5em;
        font-weight: 600;
    }
    .navbar-brand:hover {
        color: #eee;
    }
}
</style>