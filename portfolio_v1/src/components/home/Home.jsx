
import Social from "../social/Social"

import "./home.css"

function Home(){
    return (
        <section className="home container" id="home">
            <Social />
            
            <div className="home__img"></div>
            
            <div className="home__description">
                
                <h2 className="home__name">Victor Azzolini</h2>

                <h3 className="home__subtitle">Desenvolvedor Front-End</h3>

                <p className="home__about">Amo as possibilidades que a tecnologia pode proporcionar e as realidades que ela pode transformar! </p>
                    
                <div className="home__button">
                    <a href="" className="dowload__button">
                        <button className="button">
                            <i className="uil uil-file-download"></i>
                            Download CV
                        </button>
                    </a>
                    <a href="#contato" className="contato__button">
                        <button className="button">
                            <i className="uil uil-message"></i>
                            Enviar Msg
                        </button>
                    </a>
                </div>
                
            </div>
        </section>
    )
}

export default Home