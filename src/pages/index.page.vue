<template>
  <form class="flex justify-center items-center">
    <div
        class="px-20 h-10 bg-placeholder-gray text-placeholder-text"
        @dragenter.prevent="isDrag = true"
        @dragover.prevent="isDrag = true"
        @drop.prevent="handleDrop"
        @dragleave.prevent="isDrag = false"
    >
      Перетащите файлы в поле или нажмите на него
    </div>
  </form>
  <router-link :to="{ name: RouteName.PREVIEW }">
    Go to preview
  </router-link>
</template>
<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { RouteName } from '../routing/route-name.enum.ts'
  import { useUploadsStore } from "../store/uploads.ts"

  export default {
    name: 'Index',
    setup() {
      const { addFile } = useUploadsStore()
      return { addFile }
    },
    data: () => ({
        isDrag: false
    }),
    computed: {
      RouteName() {
        return RouteName
      }
    },
    methods: {
      handleDrop(event: DragEvent) {
        this.isDrag = false
        const file = event.dataTransfer?.files?.[0]

        if (!file) return

        this.addFile(file)
      }
    },
    components: {
      RouterLink,
      RouterView
    },
  }
</script>