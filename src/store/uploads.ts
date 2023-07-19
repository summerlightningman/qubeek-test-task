import { defineStore } from 'pinia'

import { FileItem, UploadsState } from '../types/file'

export const useUploadsStore = defineStore('uploads', {
    state: (): UploadsState => ({
        files: []
    }),
    actions: {
        addFile(file: File) {
            this.files.push({
                name: file.name,
                extension: file.name.split('.').at(-1) || '',
                size: file.size,
                added: +new Date()
            })
        },
        deleteFile(file: FileItem) {
            this.files = this.files.filter(item => item !== file)
        }
    }
})