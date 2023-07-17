<template>
  <h1>Preview works!</h1>
  <router-link :to="{ name: RouteName.INDEX }">
    Go to index
  </router-link>
</template>

<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import { RouteName } from '../routing/route-name.enum.ts'

  export default {
    name: 'Preview',
    computed: {
      RouteName() {
        return RouteName
      }
    },

    components: {
      RouterLink,
      RouterView
    },
  }
</script>

<style scoped>
</style>