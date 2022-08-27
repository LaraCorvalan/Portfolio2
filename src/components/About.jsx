import React from "react";
import s from '../estilos/About.module.css'
import foto from '../utils/foto-portfolio.png'
import { useTranslation } from "react-i18next";
import CV from '../utils/CV-LaraCorvalan.pdf'

export default function About() {

    const { t } = useTranslation()
    return (
        <div className={s.container}>
            <div className={s.section}>
                <div className={s.tabla}>
                    <div className={s.row}>
                        <div className={s.formation}>
                            <p className={s.cardtitle} style={{ color: 'white', fontWeight: '500', textShadow: '1px 1px 3px black', marginBottom: '10px' }} >{t('education').toUpperCase()}</p>
                            <h1 style={{ textAlign: 'center' }}> <b>{t('formation')}</b></h1>
                            <p style={{ textAlign: 'center' }}>{t('formationDescription')}</p>
                            <h1> <b>{t('python')}</b></h1>
                            <p style={{ textAlign: 'center' }}>{t('pythonDescription')}</p>
                            <h1> <b>{t('uxui')}</b></h1>
                            <p style={{ textAlign: 'center' }}>{t('uxuiDescription')}</p>
                        </div>
                        <div className={s.workexp}>
                            <p className={s.cardtitle} style={{ color: 'white', fontWeight: '500', textShadow: '1px 1px 3px black' }} >{t('work experience').toUpperCase()}</p>
                            <p style={{ marginTop: '17px', textAlign:'center' }}> <b>{t('teaching')}</b> </p>
                            <p style={{ textAlign: 'center' }}>{t('teachingDescription')}</p>
                            <p style={{ marginTop: '17px' }}> <b>{t('receptionist')}</b> </p>
                            <p style={{ textAlign: 'center' }}>{t('receptionistDescription')}</p>
                        </div>

                    </div>
                    <div className={s.row}>
                        <div className={s.projects} >
                            <p className={s.cardtitle} style={{ color: 'white', fontWeight: '500', textShadow: '1px 1px 3px black', marginBottom: '10px' }} >{t('my projects').toUpperCase()}</p>
                            <p> <b>{t('faltauno')}</b></p>
                            <p style={{ textAlign: 'center' }}>{t('faltaunoDescription')}</p>
                            <i style={{ margin: '5px' }}><a href="https://github.com/falta-uno/proyecto-grupal">{t('repoLink')}</a></i>
                            <p> <b>{t('gameflix')}</b></p>
                            <p style={{ textAlign: 'center' }}>{t('gameflixDescription')}</p>
                            <i style={{ marginTop: '5px' }}><a href="https://github.com/LaraCorvalan/PI-VideoGames">{t('repoLink')}</a></i>
                        </div>
                        <div className={s.languages}>
                            <p className={s.cardtitle} style={{ color: 'white', fontWeight: '500', textShadow: '1px 1px 3px black', marginBottom: '10px' }} >{t('languages').toUpperCase()}</p>
                            <div style={{display: 'flex', alignItems: 'center', flexDirection:'column', justifyContent:'center'}}>

                            <div className={s.english} style={{ display: 'flex', flexDirection: 'row' }} >
                                <p style={{marginRight:'10px'}}> <b>{t('lang1')}</b></p> -
                                <p style={{marginLeft:'10px'}}>{t('level1')}</p>
                            </div>
                            <div className={s.french} style={{ display: 'flex', flexDirection: 'row' }} >
                                <p style={{marginRight:'10px'}}> <b>{t('lang2')}</b></p> - 
                                <p style={{marginLeft:'10px'}}>{t('level2')}</p>
                            </div>
                            <div className={s.spanish} style={{ display: 'flex', flexDirection: 'row' }} >
                                <p style={{marginRight:'10px'}}> <b>{t('lang3')}</b></p> -
                                <p style={{marginLeft:'10px'}}>{t('level3')}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.containerimg}>
                    <img src={foto} alt="" />
                    <div className={s.intro} >
                        <p>{t('experience')}</p>
                        <p>{t('finishedHenry')}</p>
                    </div>
                    <a className={s.style} href={CV}>{t('download')}</a>
                </div>
            </div>

        </div>
    )
}