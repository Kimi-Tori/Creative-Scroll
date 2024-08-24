<template>
    <div class="home">
        <home-hero />
        <home-gallery class="home__gallery" />
    </div>
</template>

<script>
import HomeHero from '@/components/home/home-hero.vue'
import HomeGallery from '@/components/home/home-gallery.vue'

export default {
    name: 'home-template',
    components: {
        HomeHero,
        HomeGallery
    }
}
</script>

<style lang="scss" scoped>
.home {
    &__gallery {
        margin-top: 100px;

        @include up($md) {
            margin-top: 170px;
        }
    }
}
</style>