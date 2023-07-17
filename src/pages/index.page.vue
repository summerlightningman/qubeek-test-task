<template>
  <h1>Hello world!</h1>
  <router-link :to="{ name: RouteName.PREVIEW }">
    Go to preview
  </router-link>
</template>
<script setup lang="ts">
  import {useUploadsStore} from "../store/uploads.ts";

  const store = useUploadsStore()
</script>
<script lang="ts">
  import { RouterLink, RouterView } from "vue-router"
  import { RouteName } from "../routing/route-name.enum.ts"

  export default {
    name: 'Index',
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