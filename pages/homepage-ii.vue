<template>
    <div>
        <BeerBanner />
        <Catalogue />
        <ProductCard />
        <SearchTag />
        <SearchProducts />
    </div>
</template>

<script>
import BeerBanner from '@/components/beer-banner'
import Catalogue from '@/components/catalogue-carousel'
import ProductCard from '@/components/product-card'
import SearchTag from '@/components/search-tags'
import SearchProducts from '@/components/search-products'
    export default {
        components: {BeerBanner,Catalogue,ProductCard,SearchTag,SearchProducts}
    }
</script>

<style lang="scss" scoped>

</style>