<template>
    <div>
        <ImageBanner />
        <About />
        <SearchTag />
        <SearchProducts />
        <Catalogue />
        <CatalogueCarousel />

    </div>
</template>

<script>
import Catalogue from '@/components/catalogue';
import About from '@/components/about';
import ImageBanner from '@/components/banner-image'
import CatalogueCarousel from '@/components/catalogue-carousel'
import SearchTag from '@/components/search-tags'
import SearchProducts from '@/components/search-products'
    export default {
        components: {Catalogue,About,ImageBanner,CatalogueCarousel,SearchTag,SearchProducts}
    }
</script>

<style lang="scss" scoped>

</style>