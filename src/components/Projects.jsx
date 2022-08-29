import React from 'react';
import { useTranslation } from "react-i18next";
import '../estilos/Portfolio.css'
import gameflix from '../utils/gameflix.PNG'
import faltauno from '../utils/falta uno miniatura.PNG'

export default function Portfolio() {
    const { t } = useTranslation()
    return (
        <div id='portfolio'>
            
                <p class="titulo-seccion">{t('my projects').toUpperCase()} </p>
            
            <div class="fila">
                <div class="proyecto">
                    <a href="https://gameflix-zeta.vercel.app/">
                        <div class="overlay"></div>
                        <img
                            src={gameflix}
                            alt=""
                        />
                        <div class="info">
                            <h4>Gameflix Z</h4>
                            <p>Videogames App</p>
                        </div>
                    </a>
                </div>
                <div class="proyecto">
                    <a href="https://falta-uno-henry.vercel.app/"></a>
                    <div class="overlay"></div>
                    <img
                        src={faltauno}
                        alt=""
                    />
                    <div class="info">
                        <h4>FaltaUno!</h4>
                        <p>{t('falta1')} </p>
                    </div>
                </div>
                {/* <div class="proyecto">
                    <div class="overlay"></div>
                    <img
                        src="https://images.unsplash.com/photo-1579546929556-bf8352f5889c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt=""
                    />
                    <div class="info">
                        <h4>Descripcion del proyecto</h4>
                        <p>Diseño Web</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}