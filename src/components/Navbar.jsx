import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage'
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import s from '../estilos/Navbar.module.css'
import { IoLanguageSharp } from "react-icons/io5";
import { Switch } from '@chakra-ui/react'



export default function Navbar() {
    const { t } = useTranslation()
    const [language, setLanguage] = useLocalStorage('language', 'en')
    const handleLanguageChange = () => {
        if (language === 'en') {
            i18n.changeLanguage('sp')
            setLanguage('sp')
        } else if (language === 'sp') {
            i18n.changeLanguage('en')
            setLanguage('en')
        }
    }

    return (
        <header className={s.header}>
            <div className={s.contenidoheader} >
                <h1 className={s.loguis}>/LC/</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <nav id="nav" >
                        <ul id="links" className={s.nav} >
                            <li className={s.items}>
                                <a href="#inicio">{t('home').toLocaleUpperCase()} </a>
                            </li>
                            <li className={s.items}>
                                <a href="#sobremi">{t('about me').toLocaleUpperCase()}</a>
                            </li>
                            <li className={s.items}>
                                <a href="#skills">{t('skills').toLocaleUpperCase()}</a>
                            </li>
                            <li className={s.items}>
                                <a href="#portfolio">PORTFOLIO</a>
                            </li >
                            <li className={s.items}>
                                <a href="#contacto">{t('contactme').toLocaleUpperCase()}</a>
                            </li>
                        </ul>
                    </nav>

                </div>

                    <Switch size='sm' onChange={handleLanguageChange} style={{color:'white', display:'flex', flexDirection:'row'}}> <IoLanguageSharp/> </Switch>

                
            </div>
        </header>
    )
}