<template>
  <li
      class="pr-3 list-none grid grid-rows-2"
      :style="{ gridTemplateColumns: '3.5rem auto 2rem' }"
  >
    <img
        class="w-14 h-14 row-start-1 row-end-3"
        src="../assets/file-24.svg"
        alt="FILE"
    />
    <span class="truncate font-semibold">
      {{ file.name }}
    </span>
    <button
        @click="onDelete(file)"
    >
      <img
          class="text-red-600"
          src="../assets/delete-16.svg"
          alt="X"
      >
    </button>
    <span>{{ size }}</span>
  </li>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { FileItem } from '../types/file'
  import { formatFilesize } from '../utils/file'
  import { useUploadsStore } from '../store/uploads'

  export default defineComponent({
    name: 'file-item',
    props: {
      file: {
        type: Object as PropType<FileItem>,
        required: true
      }
    },
    setup() {
      const uploadsStore = useUploadsStore()
      return { uploadsStore }
    },
    methods: {
      onDelete(file: FileItem) {
        this.uploadsStore.deleteFile(file)
      }
    },
    computed: {
      size() {
        return formatFilesize(this.file.size)
      }
    }
  })
</script>