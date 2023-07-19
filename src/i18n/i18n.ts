import { createI18n } from 'vue-i18n'
import ru from './locales/ru.json'
import en from './locales/en.json'

const useI18n = createI18n({
    locale: 'ru',
    messages: {
        ru,
        en
    },
    legacy: false,
})

export default useI18n