<template>
    <section id="Content" class="svg-background">
        <div class="container text-center mt-5">
            <section id="Header">
                <div class="main-content ">
                    <div class="row">
                        <h1 class="name col-12">Reece Rose</h1>
                    </div>
                    <div class="row">
                        <h4 class="motto col-12">Full stack developer</h4>
                    </div>
                    <div class="row">
                        <div class="icons col-12">
                            <a href="https://github.com/reecerose" target="_blank" class="icon">
                                <i class="fab fa-github icon fa-3x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/reece-rose-5b2864116/" target="_blank" class="icon">
                                <i class="fab fa-linkedin-in fa-3x icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="About" class="row">
                <!-- <div class="shadow-lg bg-white col-12"> -->
                <div class="section-background shadow-lg col-12">
                    <h1 class="title">About me</h1>
                    <hr class="hr-blue">
                    <p class="description">
                        I am currently a full-time student at Sheridan College in the Systems Analyst Co-op program entering my final year.
                    </p>
                </div>
        </section>
        <section id="Projects" class="row">
            <div class="section-background shadow-lg col-12">
                <h1 class="title">Projects</h1>
                <FeaturedProjects class="mt-4"/>
                <router-link to="/Projects" class="btn btn-lg btn-primary">View all my projects</router-link>
            </div>
        </section>
        </div>
    </section>
</template>

<script>
import FeaturedProjects from '@/components/FeaturedProjects.vue'
export default {
    name: 'Home',
    components: {
        FeaturedProjects
    }
}
</script>

<style lang="scss" scoped>
section {
    padding-top: 50px;
}

.icons {
    .icon {
        padding-right: 15px;
        text-decoration: none;
        color: #fff;
    }
}

#Content {
    display: block;
    .main-content {
        text-align: center;
        color: #fff;

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
}

.svg-background {
    margin-top: -210px;
}
</style>