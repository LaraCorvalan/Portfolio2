import './App.css';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './components/Landing';
import React from "react";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import useLocalStorage from './hooks/useLocalStorage'
import foto from './utils/portfolio.jpg'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { IoLanguageSharp } from "react-icons/io5";

function App() {
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
    // <Router>

    //   <Routes>
    //     <Route exact path={'/'} element={<Landing/>}></Route>
    //   </Routes>

    // </Router>
    <div>
      <section id="inicio">
        <header>
          <div class="contenido-header" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <h1>/LC/</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <nav id="nav" class="">
                <ul id="links" style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <li>
                    <a href="#inicio">HOME</a>
                  </li>
                  <li>
                    <a href="#sobremi">{t('about me').toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#skills">{t('my skills').toUpperCase()}</a>
                  </li>
                  <li>
                    <a href="#portfolio">PORTFOLIO</a>
                  </li>
                  <li>
                    <a href="#contacto">{t('contactme').toUpperCase()}</a>
                  </li>
                </ul>
              </nav>
            </div>


            {/* <!-- ICONOS DE REDES SOCIALES - */}
            <div id="icono-redes" style={{ display: 'flex', flexDirection: 'row' }}>
              <a href="https://github.com/LaraCorvalan">
                <AiFillGithub />
                {/* <i class="fa-brands fa-github"></i> */}
              </a>
              <a href="https://www.linkedin.com/in/lara-corvalan-b7273723b/">
                <AiFillLinkedin />
                {/* <i class="fa-brands fa-linkedin"></i> */}
              </a>
              <a href="mailto:laricorvalan94@gmail.com">
                <HiMail />
                {/* <i class="fa-regular fa-envelope"></i> */}
              </a>
              <a href="https://www.instagram.com/lari_corvalan/">
                {/* <i class="fa-brands fa-instagram"></i> */}
                <AiOutlineInstagram />
              </a>
            <button onClick={handleLanguageChange}><IoLanguageSharp/>
               {/* {language === 'en' ? t('spanish') : t('english')} */}
            </button>
            </div>
          </div>
        </header>

        <h1>{t('welcome')}</h1>
        <h3>{t('i am')}</h3>
        <p>{t('dev')}</p>
        <p>{t('born')}</p>
        <p>{t('available')}</p>
        <p>{t('phrase1')}</p>
        {/* <button>{t('go to portfolio')}</button> */}
        <a href="#portfolio">{t('go to portfolio')}</a>

        <br />

        {/* <br /> */}
        {/* <button onClick={() => window.location.reload()} >
        {t('refresh page')}
      </button> */}
      </section >

      <section id="sobremi">
        <div className='contenedor-imagen'>
          <img style={{ maxWidth: '400px' }} src={foto} alt='img' />
        </div>

      </section>

    </div>

  );
}

export default App;
