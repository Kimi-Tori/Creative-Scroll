<template>
    <section class="gallery">
        <v-container>
                <div>
                    <img :src="require('@/assets/work/work-1.jpg')" class="gallery__img w-100 float-sm-left mr-sm-10 mb-10 mb-md-0">
                    <h2 class="subtitle color-header text-center text-md-left mt-5 mt-sm-0">Creative floating scroll with amazing parallax effect</h2>
                    <p class="text color-text mt-5 text-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                </div>
                <img :src="require('@/assets/work/work-2.jpg')" class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-sm-right">
                <img :src="require('@/assets/work/work-3.jpg')" class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-sm-left mb-sm-10">
                <div>
                    <img :src="require('@/assets/work/work-4.jpg')" class="gallery__img w-100 float-sm-right ml-sm-10 mt-sm-16 mb-10 mb-md-0">
                    <h2 class="subtitle color-header text-center text-md-left">Creative floating scroll with amazing parallax effect</h2>
                    <p class="text color-text mt-5 text-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                </div>
                <img :src="require('@/assets/work/work-5.jpg')" class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-left">
                <img :src="require('@/assets/work/work-6.jpg')" class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-sm-right mb-16">
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'home-gallery'
}
</script>

<style lang="scss" scoped>
.gallery {

    &__img {
        border-radius: 20px;

        @include up($sm) {
            width: 47% !important;
            max-width: 510px;
        }
    }
}
</style>

