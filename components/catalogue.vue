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
            <li v-for="product in products" :key="product.id">
        <div class="columns is-centered">
            <div class="column is-one-quarter"></div>
            <div class="column pl-5">
            <div class="product">
                <div class="product-name">{{ product.title }}</div>
                <div class="product-description">{{ product.description }}</div>
                <div class="product-price">${{ product.price }}</div>
            </div>
            </div>
            <div class="column pl-4">
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
            <li v-for="product in moreproducts" :key="product.id">
        <div class="columns is-centered">
            <div class="column is-one-quarter"></div>
            <div class="column pl-4">
            <div class="product">
                <div class="product-name">{{ product.title }}</div>
                <div class="product-description">{{ product.description }}</div>
                <div class="product-price">${{ product.price }}</div>
            </div>
            </div>
            <div class="column pl-4">
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

<script>
  export default {
    data() {
      return { 
        products: [
          { 
            id: 'first-product', 
            title: 'first product', 
            description: 'first product description', 
            image: 'https://dummyimage.com/300x300/ccc/aaa', 
            price: '4.99'
          },
          { 
            id: 'second-product', 
            title: 'second product', 
            description: 'second product description', 
            image: 'https://dummyimage.com/300x300/ccc/aaa', 
            price: '5.99'
          },
        ],
        moreproducts: [
          { 
            id: 'third-product', 
            title: 'third product', 
            description: 'third product description', 
            image: 'https://dummyimage.com/300x300/ccc/aaa', 
            price: '8.99'
          },
          { 
            id: 'fourth-product', 
            title: 'fourth product', 
            description: 'fourth product description', 
            image: 'https://dummyimage.com/300x300/ccc/aaa', 
            price: '9.99'
          }
        ],
      }
    }
  }
</script>