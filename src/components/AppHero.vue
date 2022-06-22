<template>
  <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ description }}</div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Online Store'
    },
    description: {}
  }
}
</script>
