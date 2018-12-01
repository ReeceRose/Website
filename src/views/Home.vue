<template>
    <section id="Content" class="svg-background">
        <Navigation/>
        <div class="container text-center">
            <section id="Header">
                <div class="main-content">
                    <div class="row">
                        <h1 class="name col-12">Reece Rose</h1>
                    </div>
                    <div class="row">
                        <h4 class="motto col-12">Full stack developer</h4>
                    </div>
                    <div class="row justify-content-center">
                        <a href="https://github.com/reecerose" rel="noreferrer" target="_blank" class="icon" aria-hidden="true">
                            <i class="fab fa-github icon fa-3x fa-fw"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/reece-rose-5b2864116/" rel="noreferrer" target="_blank" class="icon" aria-hidden="true">
                            <i class="fab fa-linkedin-in fa-3x fa-fw"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section id="About" class="row padding-top">
                <div class="section-background shadow-lg col-12">
                    <h1 class="title">About me</h1>
                    <hr>
                    <p class="description">
                        My name is Reece Rose and I am a full-time student at Sheridan College who specializes in creating dynamic and beautiful websites.
                        Check out some of my projects below to see what I have been up to lately.
                    </p>
                </div>
            </section>
            <section id="Projects" class="row padding-top">
                <div class="section-background shadow-lg col-12">
                    <h1 class="title">Projects</h1>
                    <hr>
                    <FeaturedProjects class="mt-4"/>
                    <router-link to="/Projects" class="btn btn-lg btn-blue">View all my projects</router-link>
                </div>
            </section>
            <section id="Contact" class="row padding-top">
                <div class="section-background col-12">
                    <h1 class="title">Contact Me</h1>
                    <hr>
                    <p class="description">
                        Need to contact me? Email me at <a href="mailto:reecerose18@gmail.com" class="text-blue">reecerose18@gmail.com</a>
                    </p>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import ScrollReveal from 'scrollreveal'

import Navigation from '@/components/Navigation'
import FeaturedProjects from '@/components/FeaturedProjects.vue'

export default {
    name: 'Home',
    components: {
        Navigation,
        FeaturedProjects
    },
    mounted() {
        ScrollReveal().reveal('#Header', {delay: 500, distance: '75px', duration: 1000});
        ScrollReveal().reveal('#About', {delay: 750, distance: '50px', duration: 2500});
        ScrollReveal().reveal('#Projects', {delay: 1000, distance: '75px', duration: 3500});
        ScrollReveal().reveal('#Contact', {delay: 500, distance: '25px', duration: 2000});
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.padding-top {
    padding-top: 50px;
}

.icon {
    padding: 0 10px;
    text-decoration: none;
    color: get-color(mainText);

    &:hover {
        color: get-color(mainTextHover);
    }
}

#Content {
    display: block;
    .main-content {
        text-align: center;
        color: get-color(mainText);

        .name {
            font-weight: 800;
            font-size: 3.5em;
            padding-bottom: 30px;
        }
        .motto {
            font-weight: 600;
            padding-bottom: 25px;
        }
    }
}
#Projects {
    .btn {
        margin-top: 25px;
    }
    .btn-blue {
        background-color: get-color(primaryBlue) !important;
        color: #fff;
    }
}

#Contact {
    .text-blue {
        color: get-color(primaryBlue)
    }
}
</style>