import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import useLocalStorage from '../hooks/useLocalStorage'

export default function Landing(){

    const {t} = useTranslation()
    const [language, setLanguage] = useLocalStorage('language', 'en')

    const handleLanguageChange = () => {
        if(language === 'en'){
            i18n.changeLanguage('sp')
            setLanguage('sp')
        } else if(language === 'sp'){
            i18n.changeLanguage('en')
            setLanguage('en')
        }
    }

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <br />
            <button onClick={handleLanguageChange}>
                {t('change to')} {language === 'en' ? t('spanish') : t('english')}
            </button>
            <br />
            <button onClick={() => window.location.reload()} >
                {t('refresh page')}
            </button>
        </div>
    )
}