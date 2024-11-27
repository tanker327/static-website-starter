import '@/assets/styles/main.css'
import { initHeader } from '@/components/header/header.js'
import { someHelper } from '@/js/utils/helpers.js'

document.addEventListener('DOMContentLoaded', () => {
    initHeader()
    someHelper()
})

// const loadModule = async () => {
//     const module = await import('./dynamic-module.js')
//     module.default()
// }

const loadImage = async () => {
    const imageUrl = new URL('@/assets/images/me.png', import.meta.url).href
    const img = new Image()
    img.src = imageUrl
    return img
}
