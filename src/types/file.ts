export interface FileItem {
    name: string
    extension: string
    size: number
    added: number
}

export interface UploadsState {
    files: FileItem[]
}