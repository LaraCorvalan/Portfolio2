import React from "react";
import { useTranslation } from "react-i18next";
import s from '../estilos/Landing.module.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { HiMail } from "react-icons/hi";


export default function Landing() {

  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <div className={s.title}  >
        <h1 className={s.pres}>{t('welcome')}{t('i am')} Lara</h1>
        <span className={s.dev}>{t('dev')}</span>
      </div>
      <div className={s.content}>
      <p className={s.text}>{t('intro')}</p>
      <p className={s.text}>{t('without')}</p>

        <p className={s.text}>{t('born')}</p>
      </div>
        <p className={s.frase}><b>{t('phrase1')}</b></p>

      {/* <a href="#portfolio">{t('go to portfolio')}</a> */}
      {/* <!-- ICONOS DE REDES SOCIALES - */}
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
    </div>
  )
}