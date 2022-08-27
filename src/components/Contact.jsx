import { t } from 'i18next';
import React from 'react';
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import s from '../estilos/Contact.module.css'

export default function Contact() {
    const { t } = useTranslation()
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div style={{marginBottom:'70px', paddingTop:'70px'}}>
            <p className={s.contactTitle}>{t('get in touch').toUpperCase()}</p>
            <p className={s.contactMe}>{t('contact me')}</p>
            <div className={s.contact} >
                <form onSubmit={e => handleSubmit(e)} className={s.formContact}>
                    <input style={{marginTop:'10px'}}className={s.input} type="text" placeholder='Name' />
                    <input className={s.input} type="text" placeholder='Mail' />
                    <textarea className={s.message} type="text" placeholder='Message' />
                    <input className={s.send} type="submit" value={t('send')} />
                </form>
                <div style={{width:'350px'}}>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://www.linkedin.com/in/lara-corvalan-fullstack/"><AiFillLinkedin style={{marginRight:'20px'}}/>LinkedIn</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://github.com/LaraCorvalan"><AiFillGithub style={{marginRight:'20px'}}/>Github</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="mailto:laricorvalan94@gmail.com" ><SiGmail style={{marginRight:'20px'}}/>Gmail</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://www.instagram.com/lari_corvalan/?hl=es" ><AiOutlineInstagram style={{marginRight:'20px'}} />Instagram</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://api.whatsapp.com/send/?phone=1144194875&text=Hola+Lara,+como+est%C3%A1s+?&type=phone_number&app_absent=0" ><AiOutlineWhatsApp style={{marginRight:'20px'}}/>+54 1144194875</a>
                </div>
            </div>


        </div>
    )
}