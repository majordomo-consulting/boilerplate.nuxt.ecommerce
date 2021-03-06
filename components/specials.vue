<template>
    <section class="container pb-6">
        <div class="columns">
            <div class="column is-one-quarter is-vcentered">
                <div class="section-heading">
                    <h6>Specials</h6>
                    <!-- <h2>Our Selection</h2> -->
                </div>
            </div>
            <div class="column">
                <Carousel />
            </div>
        </div>
    </section>
</template>

<script>
import Carousel from '@/components/carousel';

export default {
    components: {Carousel}
}
</script>
