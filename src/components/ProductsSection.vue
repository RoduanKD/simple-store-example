<template>
  <section class="section">
    <div class="container">
      <div class="columns column">
        <form class="form">
          <!-- title input -->
          <!-- price input (type number) > 0 -->
          <!-- description textarea -->
          <!-- image input (accepts URL) -->
          <!-- submit button with Add text -->
        </form>
      </div>
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
    axios.get('https://fakestoreapi.com/products').then(res => {
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
