export interface File {
    filename: string
    extension: string
    size: number
}

export interface UploadsState {
    files: File[]
}