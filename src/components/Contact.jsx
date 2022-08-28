import { t } from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import s from '../estilos/Contact.module.css'
import emailjs from 'emailjs-com'
import { useToast } from '@chakra-ui/react'

export default function Contact() {
    const { t } = useTranslation()
    const toast = useToast()
    const [input, setInput] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })

    const enviarEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_i5ytw1k', 'template_ajfmi9a', e.target, 'yihAS--du3TDVp_mP').then(res => {
            console.log(res);
        })
        toast({
            title: 'Mensaje enviado con éxito.', 
            status: 'success', 
            duration: 3000,
            isClosable: true, 
            position: 'bottom-right',
           
        })
        setInput({
            nombre: '',
            email: '',
            mensaje: ''
        })
    }

    const validador = (inputs) => {
        let validations = {};
        const nameExpresion = /[0-9/'0-9'/,*+._&=():;%$#!|-]/gi;
        const emailExpresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!inputs.nombre) {
            validations.nombre = 'Debe ingresar su nombre'
        } else if (nameExpresion.test(inputs.nombre)) {
            validations.nombre = 'Ingrese solo letras'
        } else if (!inputs.email) {
            validations.email = 'Debe ingresar su email'
        }
        else if (!emailExpresion.test(inputs.email)) {
            validations.email = 'Ingrese un email válido'
        }
        else if (!inputs.mensaje) {
            validations.mensaje = 'Debe ingresar un mensaje'
        }
        return validations
    }

    const handleOnChange = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        const errores = validador({ ...input, [e.target.name]: e.target.value })
        setErrors(errores)
    }



    return (
        <div style={{ marginBottom: '70px', paddingTop: '70px' }}>
            <p className={s.contactTitle}>{t('get in touch').toUpperCase()}</p>
            <p className={s.contactMe}>{t('contact me')}</p>
            <div className={s.contact} >
                <form onSubmit={enviarEmail} className={s.formContact}>
                    {/* <label> <b>Name</b> </label> */}
                    <div style={{marginBottom: '15px'}}>
                        <input style={{ marginTop: '10px' }} onChange={e => handleOnChange(e)} name='nombre' className={s.input} type="text" placeholder='Name' value={input.nombre} />
                        {errors.nombre ? <p style={{ color: 'red'}}>{errors.nombre}</p> : null}
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <input className={s.input} onChange={e => handleOnChange(e)} type="text" name='email' placeholder='Enter your email' value={input.email} />
                        {errors.email ? <p style={{ color: 'red' }}>{errors.email}</p> : null}
                    </div>
                    <div style={{marginBottom: '15px'}}>
                        <textarea className={s.message} onChange={e => handleOnChange(e)} type="text" name='mensaje' placeholder='Write your message' value={input.mensaje} />
                        {errors.mensaje ? <p style={{ color: 'red' }}>{errors.mensaje}</p> : null}
                    </div>
                    {!errors.nombre &&
                    !errors.email &&
                    !errors.mensaje
                    ?
                    <button className={s.sendActive} type="submit">{t('send')}</button>
                    : 
                    <button className={s.sendDisabled} disabled type="submit">{t('send')}</button>
                    }
                </form>
                <div className={s.redess} style={{ width: '350px' }}>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://www.linkedin.com/in/lara-corvalan-fullstack/"><AiFillLinkedin style={{ marginRight: '20px' }} />LinkedIn</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://github.com/LaraCorvalan"><AiFillGithub style={{ marginRight: '20px' }} />Github</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="mailto:laricorvalan94@gmail.com" ><SiGmail style={{ marginRight: '20px' }} />Gmail</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://www.instagram.com/lari_corvalan/?hl=es" ><AiOutlineInstagram style={{ marginRight: '20px' }} />Instagram</a>
                    <a className={s.redes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }} href="https://api.whatsapp.com/send/?phone=1144194875&text=Hola+Lara,+como+est%C3%A1s+?&type=phone_number&app_absent=0" ><AiOutlineWhatsApp style={{ marginRight: '20px' }} />+54 1144194875</a>
                </div>
            </div>


        </div>
    )
}