<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img v-bind:src="item.image" v-bind:alt="item.title">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ setLength(item.title, 50) }}</p>
          <p class="subtitle is-6">{{ item.price }}$</p>
          <button class="button is-small is-primary" v-on:click="$emit('increase', 2)">Plus +</button>
        </div>
      </div>

      <div class="content">
        {{ setLength(item.description, 80) }}
        <br>
        <a href="#">#{{ item.category }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['item'],
  props: {
    item: {
      type: Object
    }
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
