<template>
  <main class="h-screen flex justify-center flex-col items-center" ref="fileForm">
    <div
        class="w-3/5 h-48 flex flex-col justify-center bg-placeholder-gray text-placeholder-text"
        :class="{
          'bg-placeholder-gray-active': isDrag,
        }"
        @click="openFile"
        @dragenter.prevent="isDrag = true"
        @dragover.prevent="isDrag = true"
        @drop.prevent="handleDrop"
        @dragleave.prevent="isDrag = false"
    >
      <p class="text-center">
        {{
          !isDrag
            ? 'Перетащите файлы в поле или нажмите на него'
            : 'Отпустите чтобы опубликовать файл'
        }}
      </p>
      <input
          type="file"
          multiple
          class="hidden"
          ref="fileInput"
          :value="filePath"
          @change="handleFileInputChange"
      />
    </div>
    <router-link
        :to="{ name: RouteName.PREVIEW }"
        class="mt-3.5 px-5 py-2.5 bg-violet-700 hover:bg-violet-600 text-white"
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

        const fileList = event.dataTransfer?.files
        if (!fileList?.length) return

        [...fileList].forEach(this.uploadsStore.addFile)
      },
      handleFileInputChange(e: Event) {
        const fileList = e.currentTarget?.files
        if (!fileList.legth) return

        [...fileList].forEach(this.uploadsStore.addFile)
      },
      openFile() {
        this.$refs?.fileInput?.click()
      }
    },
    components: {
      RouterLink,
      RouterView
    },
  }
</script>