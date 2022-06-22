<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
          <div
            v-for="product in products"
            v-bind:key="product.id"
            class="column is-12 is-4-desktop is-3-fullhd"
          >
            <product-card :item="product" v-on:increase="handelIncrease(product, $event)" />
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },

  data () {
    return {
      products: []
    }
  },

  created () {
    axios.get('https://fakestoreapi.com/products/').then(res => {
      this.products = res.data
    })
  },

  methods: {
    handelIncrease (product, amount) {
      product.price += amount
    }
  }
}
</script>

<style>

</style>
