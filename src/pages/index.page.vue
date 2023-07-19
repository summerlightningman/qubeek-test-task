<template>
  <main class="h-screen flex justify-center flex-col items-center" ref="fileForm">
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
          :value="filePath"
          @change="handleFileInputChange"
      />
    </div>
    <router-link
        :to="{ name: RouteName.PREVIEW }"
        class="mt-3.5"
    >
      Go to preview
    </router-link>
  </main>
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
        isDrag: false,
        filePath: ''
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
      handleFileInputChange(e: Event) {
        const file = e.currentTarget?.files?.[0]
        if (!file) return

        this.uploadsStore.addFile(file)
      },
      openFile() {
        const { fileInput } = this.$refs
        if (!fileInput) return
        fileInput.click()
      }
    },
    components: {
      RouterLink,
      RouterView
    },
  }
</script>