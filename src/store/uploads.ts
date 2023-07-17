import { defineStore } from 'pinia'

import { File, UploadsState } from '../types/file.ts'

export const useUploadsStore = defineStore('uploads', {
    state: (): UploadsState => ({
        files: []
    }),
    actions: {
        addFile(file: File) {
            this.files.push(file)
        }
    }
})