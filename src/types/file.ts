export interface FileItem {
    name: string
    extension: string
    size: number
}

export interface UploadsState {
    files: FileItem[]
}