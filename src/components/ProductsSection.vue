<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
          <div class="column is-12 is-4-desktop is-3-fullhd" v-for="product in products" v-bind:key="product.id">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img v-bind:src="product.image" v-bind:alt="product.title">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ setLength(product.title, 50) }}</p>
                    <p class="subtitle is-6">{{ product.price }}$</p>
                  </div>
                </div>

                <div class="content">
                  {{ setLength(product.description, 80) }}
                  <br>
                  <a href="#">#{{ product.category }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
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
    setLength (str, length) {
      if (str.length > length) {
        return str.slice(0, length) + '...'
      }
      return str
    }
  }
}
</script>

<style>

</style>
