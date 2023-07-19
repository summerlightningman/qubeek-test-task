<template>
  <main class="h-screen flex flex-col justify-center items-center">
    <p
        v-if="!uploadsStore.files.length"
        class="text-3xl font-bold text-blueGray-400"
    >
      {{ t('preview.listIsEmpty') }}
    </p>
    <ul
        v-else
        class="w-6/12 h-5/6 overflow-auto"
    >
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
  </main>
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