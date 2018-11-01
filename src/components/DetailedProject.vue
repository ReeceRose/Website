<template>
    <section id="Project">
        <div class="section-background text-center">
            <img class="img-fluid" :src="project.display_image" :alt="project.name">
            <h1 class="title">{{ project.name }}</h1>
            <p class="description">{{ project.description }}</p>
            <a v-if="project.live_link != ''"  :href="project.live_link" class="btn btn-primary" target="_blank">Demo</a>
            <a v-else class="btn btn-primary disabled white">Demo not available</a>
            <a v-if="project.open_source" :href="project.source_link" target="_blank">
                <i class="fas fa-code-branch"></i>
                View source
            </a>
            <a v-else class="disabled">
                <i class="fas fa-eye"></i>
                Source is private
            </a>

            <div class="row images">
                <div v-for="(image, index) in project.images" :key="index" class="col-4">
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
.images {
    margin-top: 25px;
    margin-bottom: 25px;
}
.white {
    color: #fff !important;
}
.fas {
    padding-left: 10px;
}
</style>