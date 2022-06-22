<template>
  <div>
    <app-hero :title="product.title"></app-hero>
    <div class="title is-1">test: {{ id }}</div>
    <product-card :item="product"></product-card>
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  components: { AppHero, ProductCard },
  props: ['id'],

  data: () => ({
    product: {}
  }),

  created () {
    // this.id:
    // use a use axios to fetch /products/${id}
    // in data product: {}
  }
}
</script>

<style>

</style>
