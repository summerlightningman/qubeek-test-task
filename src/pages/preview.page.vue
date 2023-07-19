<template>
  <ul class="px-20 pt-5">
    <file-item
        v-for="file in uploadsStore.files"
        :file="file"
    />
  </ul>
  <router-link
      :to="{ name: RouteName.INDEX }"
      class="mt-3.5 px-5 py-2.5 bg-violet-700 hover:bg-violet-600 text-white"
  >
    {{ t('navigation.toIndex') }}
  </router-link>
</template>

<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import { RouteName } from '../routing/route-name.enum'
  import FileItem from '../components/file-item.component.vue'
  import {useUploadsStore} from "../store/uploads";
  import {useI18n} from "vue-i18n";

  export default {
    name: 'Preview',
    setup() {
      const uploadsStore = useUploadsStore()
      const { t } = useI18n()
      return { uploadsStore, t }
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