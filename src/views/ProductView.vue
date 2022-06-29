<template>
  <div>
    <app-hero :title="product.title"></app-hero>
    <div class="title is-1">test: {{ id }}</div>
    <section class="section">
      <div class="container">
        <product-card :item="product" />
      </div>
    </section>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import ProductCard from '@/components/ProductCard.vue'
// import axios from 'axios'

export default {
  components: { AppHero, ProductCard },
  props: ['id'],

  computed: {
    product () {
      // eslint-disable-next-line eqeqeq
      let product = this.$store.state.products.find(item => item.id == this.id)

      if (!product) {
        product = {
          title: 'Loading title ...',
          description: 'loading description ...',
          image: 'https://via.placeholder.com/500/700',
          price: '00'
        }
      }

      return product

      // eslint-disable-next-line eqeqeq
      // return this.$store.state.products.find(item => item.id == this.id) || {
      //   title: 'Loading title ...',
      //   description: 'loading description ...',
      //   image: 'https://via.placeholder.com/500/700',
      //   price: '00'
      // }
    }
  },

  created () {
    // eslint-disable-next-line eqeqeq
    // this.product = this.$store.state.products.find(item => item.id == this.id)

    // const self = this
    // this.product = this.$store.state.products.find(function (item) {
    //   // eslint-disable-next-line eqeqeq
    //   return item.id == self.id
    // })

    // use axios to fetch /products/${id}
    // axios.get(`https://fakestoreapi.com/products/${this.id}`).then(res => {
    // put data in product: {}
    // this.product = res.data
    // })
  }
}
</script>

<style>

</style>
