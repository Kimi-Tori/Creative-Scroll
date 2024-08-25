<template>
    <section class="hero position-relative h-screen">
        <v-container class="d-flex justify-center flex-column align-center align-md-start h-screen">
            <img :src="require('@/assets/hero.png')" class="hero__img w-100 h-auto mt-10 mt-md-0 wow animate__animated animate__fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
            <h1 class="hero__title color-header header-title position-relative my-md-auto wow animate__animated animate__fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">creative <br class="d-none d-md-block" />scroll</h1>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'home-hero',
    mounted() {
        // Запуск WOW.js при монтировании компонента
        this.$wow.init();
    }
}
</script>

<style lang="scss" scoped>
.hero {

    &__img {
        max-width: 500px;
        max-height: fit-content;

        @include up($sm) {
            position: absolute;
            left: 50%;
            top: 15%;
            // transform: translate(-50%, -50%);
        }

        @include up($md) {
            max-width: 600px;
            // transform: translate(-25%, -50%);
        }

        @include up($lg) {
            max-width: 800px;
        }
    }

    &__title {
        z-index: $z-index-content;
    }
}
</style>