import Typewriter from "typewriter-effect";

import "./home.css"

function Home(){
    return (
        <section className="home container" id="home">
            <div className="home__img"></div>
            <div className="home__description grid">
                
                <h2 className="home__name">Olá!</h2>
                <h3 className="home__subtitle">
                    <Typewriter 
                        options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: [
                            "Sou, Victor Azzolini",
                            "Sou, Desenvolvedor Fron-End",
                            "Amo as possibilidades que a tecnologia pode proporcionar!",
                            "Além de ser um apaixonado pela natureza e por gastronomia!"
                            
                        ]
                    }}
                    />
                </h3>
                    
                <div className="home__button">
                    <a href="" className="dowload__button">
                        <button className="button">
                            <i class="uil uil-file-download"></i>
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