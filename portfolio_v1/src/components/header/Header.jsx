import { useState } from 'react';

import './header.css'

function Header() {
    const [toogle, setToogle] = useState(false)

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="logo__container">
                    <i class="uil uil-brackets-curly"></i>
                    <div className="logo__name">Azzolini.dev</div>
                </a>
                <div className={toogle ? "nav__menu": "show__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__logo"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-scenery nav__logo"></i>
                                Projetos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-file-alt nav__logo"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-message nav__logo"></i>
                                Contato
                            </a>
                        </li>

                        <i className="uil uil-times nav__close" onClick={() => setToogle(!toogle)}></i>
                    </ul>                
                </div>

                <div className="nav__toogle" onClick={() => setToogle(!toogle)}>
                    <i className="uil uil-apps"></i>
                </div>
            

            </nav>
            
        </header>
    )
}

export default Header;