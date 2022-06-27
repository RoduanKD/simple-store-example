<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <!-- fathi here should be product -->
          <div
            v-for="fathi in products"
            v-bind:key="fathi.id"
            class="column is-12 is-4-desktop is-3-fullhd"
          >
            <router-link :to="`/products/${fathi.id}`">
              <product-card :item="fathi" v-on:increase="handelIncrease(fathi, $event)" />
            </router-link>
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
    axios.get('https://fakestoreapi.com/products?limit=5').then(res => {
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
