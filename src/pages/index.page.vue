<template>
  <form class="h-screen flex justify-center flex-col items-center" ref="fileForm">
    <div
        class="px-48 h-48 flex flex-col justify-center bg-placeholder-gray text-placeholder-text"
        @click="openFile"
        @dragenter.prevent="isDrag = true"
        @dragover.prevent="isDrag = true"
        @drop.prevent="handleDrop"
        @dragleave.prevent="isDrag = false"
    >
      Перетащите файлы в поле или нажмите на него
      <input
          type="file"
          class="hidden"
          ref="fileInput"
      />
    </div>
    <router-link
        :to="{ name: RouteName.PREVIEW }"
        class="mt-3.5"
    >
      Go to preview
    </router-link>
  </form>
</template>
<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { RouteName } from '../routing/route-name.enum.ts'
  import { useUploadsStore } from "../store/uploads.ts"

  export default {
    name: 'Index',
    setup() {
      const uploadsStore = useUploadsStore()
      return { uploadsStore }
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

        this.uploadsStore.addFile(file)
      },
      openFile() {
        if (!this.$refs.fileInput) return
        this.$refs.fileInput.click()
      }
    },
    components: {
      RouterLink,
      RouterView
    },
  }
</script>