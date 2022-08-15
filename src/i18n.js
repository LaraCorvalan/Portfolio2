import en from './translation/en.json'
import sp from './translation/sp.json'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

const resources = {
    en : {
        translation : en,
    }, 
    sp : {
        translation : sp,
    }
}

i18n.use(initReactI18next)
.init({
    resources,
    lng: JSON.parse(localStorage.getItem('language')),
    fallbackLng: 'en',
})

export default i18n