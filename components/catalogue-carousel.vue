<template>
    <b-carousel 
    :indicator="indicator"
    :animated="animated"
    :interval="interval">
        <b-carousel-item v-for="(product, i) in this.$store.state.products" :key="i">
            <section class="hero">
                <div class="hero-body has-text-centered">
                    <img :src="product.image">
                    <h1 class="title">{{product.title}}</h1>
                    <h1 class="title">{{product.description}}</h1>
                    <h1 class="title">${{product.price}}</h1>
                    <b-button class="snipcart-add-item"
                        data-item-url="/products/"
                        :data-item-id="product.id"
                        :data-item-image="product.image"
                        :data-item-name="product.title"
                        :data-item-price="product.price"
                        >
                        Add to cart
                    </b-button>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
</template>

<script>
export default {
    data(){
        return {
            indicator: false,
            animated: "fade",
            interval: 5000,
            
        }
    }
}
</script>