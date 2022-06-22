<template>
  <div class="home">
    <app-hero title="Fathi" description="This is a test" />
    <products-section />
  </div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import ProductsSection from '@/components/ProductsSection.vue'

export default {
  name: 'HomeView',
  components: {
    AppHero,
    ProductsSection
  }
}
</script>
