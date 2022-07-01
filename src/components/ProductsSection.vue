<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <form class="form" @submit.prevent="addProduct">
            <div class="field">
              <label class="label">Product Title</label>
              <div class="control">
                <input class="input" v-model="newProduct.title" type="text" placeholder="Product Title">
              </div>
            </div>
            <div class="field">
              <label class="label">Price</label>
              <div class="control">
                <input class="input" v-model="newProduct.price" type="text" placeholder="Price">
              </div>
            </div>
            <div class="field">
              <label class="label">Product Image (URL)</label>
              <div class="control">
                <input class="input" v-model="newProduct.image" type="text" placeholder="Product Image (URL)">
              </div>
            </div>
            <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" v-model="newProduct.description" placeholder="Description"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button type="submit" class="button is-link">Submit</button>
            </div>
          </div>
          </form>
        </div>
      </div>
      <div class="columns is-multiline">
        <!-- fathi here should be product -->
          <div
            v-for="fathi in $store.state.products"
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
// import axios from 'axios'
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },

  data () {
    return {
      newProduct: {
        title: '',
        image: '',
        price: '',
        description: ''
      }
    }
  },

  created () {
    // axios.get('https://fakestoreapi.com/products').then(res => {
    //   this.$store.state.products = res.data
    // })
  },

  methods: {
    handelIncrease (product, amount) {
      product.price += amount
    },

    addProduct () {
      this.$store.state.products.unshift({ ...this.newProduct })
      localStorage.setItem('products', JSON.stringify(this.$store.state.products))
      // this.products.unshift(Object.assign(this.newProduct))
      // this.products.unshift(JSON.parse(JSON.stringify(this.newProduct)))
    }
  }
}
</script>

<style>

</style>
