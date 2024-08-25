<template>
    <section class="gallery">
        <v-container>
            <div>
                <img
                    :src="require('@/assets/work/work-1.jpg')" 
                    class="gallery__img w-100 float-sm-left mr-sm-10 mb-10 mb-md-0 wow animate__animated animate__fadeInLeft" 
                />
                <h2 class="subtitle color-header text-center text-md-left mt-5 mt-sm-0 wow animate__animated animate__fadeInRight">Creative floating scroll with amazing parallax effect</h2>
                <p class="text color-text mt-5 text-center text-md-left wow animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
            </div>
            <img 
                :src="require('@/assets/work/work-2.jpg')"
                class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-sm-right wow animate__animated animate__fadeInUp"
            />
            <img 
                :src="require('@/assets/work/work-3.jpg')" 
                class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-sm-left mb-sm-10 wow animate__animated animate__fadeInUp"
            />
            <div>
                <img 
                    :src="require('@/assets/work/work-4.jpg')"
                    class="gallery__img w-100 float-sm-right ml-sm-10 mt-sm-16 mb-10 mb-md-0 wow animate__animated animate__fadeInRight"
                />
                <h2 class="subtitle color-header text-center text-md-left wow animate__animated animate__fadeInLeft">Creative floating scroll with amazing parallax effect</h2>
                <p class="text color-text mt-5 text-center text-md-left wow animate__animated animate__fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
            </div>
            <img 
                :src="require('@/assets/work/work-5.jpg')" 
                class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-left wow animate__animated animate__fadeInLeft"
            />
            <img 
                :src="require('@/assets/work/work-6.jpg')" 
                class="gallery__img w-100 ml-auto mt-16 mt-sm-10 float-sm-right mb-16 wow animate__animated animate__fadeInUp"
            />
        </v-container>
    </section>
</template>

<script>
import WOW from 'wowjs';
import 'animate.css';

export default {
    name: 'home-gallery',
    mounted() {
        new WOW.WOW({
            live: false
        }).init();
    },
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