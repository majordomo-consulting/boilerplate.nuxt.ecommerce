<template>
    <div id="order">
      <div class="section-heading">
        <h6>Order</h6>
      </div>
      <div class="section-heading pl-6">
        <h2>Category A</h2>
      </div>
      <hr />
      <ul>
        <li v-for="product in this.$store.state.products" :key="product.id">
          <div class="columns is-vcentered">
            <div class="column is-one-quarter"></div>
            <div class="column product-align">
              <div>
                  <img class="image-rounded" :src="product.image" :alt="product.title">
                  <div class="has-text-weight-bold">{{ product.title }}</div>
                  <div class="product-description">{{ product.description }}</div>
              </div>
            </div>
            <div class="column product-align">
            <div class="is-size-2 has-text-success">${{ product.price }}</div>
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
          </div>
        </li>
      </ul>
      <div class="section-heading pl-6 pt-6">
        <h2>Category B</h2>
      </div>
      <hr />
      <ul>
        <li v-for="product in this.$store.state.moreproducts" :key="product.id">
          <div class="columns is-vcentered">
              <div class="column is-one-quarter"></div>
              <div class="column product-align">
                <div class="product">
                    <img class="image-rounded" :src="product.image" :alt="product.title">
                    <div class="has-text-weight-bold">{{ product.title }}</div>
                    <div class="product-description">{{ product.description }}</div>
                </div>
              </div>
              <div class="column product-align">
              <div class="is-size-2 has-text-success">${{ product.price }}</div>
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
          </div>
        </li>
      </ul>
  </div>
</template>

<style>
.image-rounded {
  border-radius: 100%;
  width: 100px;
  height: 100px;
}
</style>