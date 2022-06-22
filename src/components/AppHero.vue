<template>
  <section class="hero is-primary is-medium">
      <div class="hero-body">
        <slot v-if="useSlot"></slot>
        <div class="title" v-if="!useSlot">{{ title }}</div>
        <div class="subtitle" v-if="!useSlot">{{ description }}</div>
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
    description: {},
    useSlot: Boolean
  }
}
</script>
