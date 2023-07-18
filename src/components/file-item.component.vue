<template>
  <li
      class="list-none grid grid-rows-2"
      :style="{ gridTemplateColumns: '3.5rem auto' }"
  >
    <img
        class="w-14 h-14 row-start-1 row-end-3"
        src="../assets/file.svg"
        alt="FILE"
    />
    <span class="truncate font-semibold">{{ file.name }}</span>
    <span>{{ size }}</span>
  </li>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { FileItem } from '../types/file.ts'
  import { formatFilesize } from '../utils/file'

  export default defineComponent({
    name: 'file-item',
    props: {
      file: {
        type: Object as PropType<FileItem>,
        required: true
      }
    },
    computed: {
      size() {
        return formatFilesize(this.file.size)
      }
    }
  })
</script>