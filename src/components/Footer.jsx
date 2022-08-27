import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import s from '../estilos/Footer.module.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { HiMail } from "react-icons/hi";



export default function Footer() {
    const { t } = useTranslation()

    return (
        <div className={s.container}>
            <div className={s.iconosredes} >
                <div className={s.icono}>
                    <a href="https://github.com/LaraCorvalan">
                        <AiFillGithub style={{ color: 'rgb(85, 85, 85)', width: '20px' }} />
                    </a>
                </div>
                <div className={s.icono}>
                    <a href="https://www.linkedin.com/in/lara-corvalan-b7273723b/">
                        <AiFillLinkedin style={{ color: 'rgb(85, 85, 85)', width: '20px' }} />
                    </a>
                </div>
                <div className={s.icono} >
                    <a href="mailto:laricorvalan94@gmail.com">
                        <HiMail style={{ color: 'rgb(85, 85, 85)', width: '20px' }} />
                    </a>
                </div>
                <div className={s.icono}>
                    <a href="https://www.instagram.com/lari_corvalan/">
                        <AiOutlineInstagram style={{ color: 'rgb(85, 85, 85)', width: '20px' }} />
                    </a>
                </div>
            </div>
            <p>{t('rights')}</p>

        </div>
    )
}