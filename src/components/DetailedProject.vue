<template>
    <section id="Project">
        <div class="section-background text-center">
            <img class="img-fluid" :src="project.display_image" :alt="project.name">
            <h1 class="title">{{ project.name }}</h1>
            <p class="description">{{ project.description }}</p>
            <div class="row justify-content-center">
                <a v-if="project.live_link != ''"  :href="project.live_link" class="btn btn-primary" target="_blank">Demo</a>
                <a v-else class="btn btn-primary disabled white">Demo not available</a>
            </div>
            <div class="row justify-content-center">
                <div class="extra-padding">
                    <a v-if="project.open_source" :href="project.source_link" target="_blank">
                        <i class="fas fa-code-branch"></i>
                        View source
                    </a>
                    <a v-else class="disabled">
                        <i class="fas fa-eye"></i>
                        Source is private
                    </a>
                </div>
            </div>
            <h4>Technologies used</h4>
            <div class="row justify-content-center">
                <span v-for="(icon, iconIndex) in project.icons" :key="iconIndex" class="icons" :title="icon.name">
                    <i :class="icon.faIcon" class="fa-2x fa-fw"></i>
                </span>
            </div>
            <h4>Images</h4>
            <div class="row justify-content-center">
                <div v-for="(image, index) in project.images" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 projects">
                    <img :src="image.link" :alt="image.title" :title="image.description" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DetailedProject',
    props: {
        project: Object
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-top: 25px;
    margin-bottom: 25px;
}
.white {
    color: #fff !important;
}
.icons {
    padding: 0 10px 25px 10px;

}
.icons:hover {
    color: #4a91f2;
}
.extra-padding{
    padding: 5px 0 25px 0;
}
</style>