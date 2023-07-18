<template>
  <ul class="px-20 pt-5">
    <file-item
        v-for="file in uploadsStore.files"
        :file="file"
    />
  </ul>
  <router-link :to="{ name: RouteName.INDEX }">
    Go to index
  </router-link>
</template>

<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import { RouteName } from '../routing/route-name.enum.ts'
  import FileItem from '../components/file-item.component.vue'
  import {useUploadsStore} from "../store/uploads";

  export default {
    name: 'Preview',
    setup() {
      const uploadsStore = useUploadsStore()
      return { uploadsStore }
    },
    computed: {
      RouteName() {
        return RouteName
      }
    },
    components: {
      RouterLink,
      RouterView,
      FileItem
    },
  }
</script>

<style scoped>
</style>