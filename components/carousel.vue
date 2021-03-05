<template>
    <section class="pb-6">
        <b-carousel
            :arrow="arrow"
            :repeat="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section>
                    <img :src="carousel.image">
                </section>
            </b-carousel-item>
        </b-carousel>
    </section>
</template>

<script>
export default {
    data() {
        return {
            arrow: false,
            arrowBoth: false,
            arrowHover: false,
            iconPack: 'mdi',
            iconPrev: 'arrow-left',
            iconNext: 'arrow-right',
            iconSize: '',
            carousels: [
                {
                    title: 'Slide 1',
                    image: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'
                },
                {
                    title: 'Slide 2',
                    image: 'https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg'
                },
                {
                    title: 'Slide 3',
                    image: 'https://cdn.pixabay.com/photo/2016/11/29/12/54/bar-1869656_1280.jpg'
                },
                {
                    title: 'Slide 4',
                    image: 'https://cdn.pixabay.com/photo/2017/07/31/11/22/people-2557408_1280.jpg'
                }
            ]
        }
    }
}
</script>
