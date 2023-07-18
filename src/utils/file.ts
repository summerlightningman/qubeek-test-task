export const formatFilesize = (size: number) => {
    const _ = (n: number) => n.toFixed(2)

    if (size < 1024) {
        return `${size} байт`
    } else if (size < 1048576) {
        return `${_(size / 1024)} KB`
    } else if (size < 1073741824) {
        return `${_(size / 1048576)} MB`
    } else {
        return `${_(size / 1073741824)} GB`
    }
}