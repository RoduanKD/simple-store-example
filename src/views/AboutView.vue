<template>
  <div class="about">
    <app-hero />
    <h1>This is an about page</h1>
    <products-section />
  </div>
</template>

<script>
import ProductsSection from '@/components/ProductsSection.vue'
import AppHero from '@/components/AppHero.vue'

export default {
  components: {
    ProductsSection,
    AppHero
  }
}
</script>
