import { useState } from "react"

import imageBlog from "../../assets/lepetit-blog.png"
import imageAndroid from "../../assets/land-page-android.png"
import imageTribute from "../../assets/tribute-page.png"

import "./projects.css"
import "./projectSeeMore.css"


function Projects() {
    const [contDiv1, setContDiv1] = useState(false)
    const [contDiv2, setContDiv2] = useState(false)
    const [contDiv3, setContDiv3] = useState(false)
    const [seeMore1, setSeeMore1] = useState(false)
    const [seeMore2, setSeeMore2] = useState(false)
    const [seeMore3, setSeeMore3] = useState(false)

    return (
        <section id="projects" className="projects__main">
            <h2 className="projects__title">Projetos</h2>
            <div className="projects container">
                <div 
                    onMouseEnter={() => setContDiv1(!contDiv1)}
                    onMouseLeave={() => setContDiv1(!contDiv1)}
                    className="projects__box-min blog"
                >
                    <div 
                        className={contDiv1
                            ?"projects__box-min__cont__black" 
                            :"projects__box-min__cont"}
                    >
                        <div 
                            className={contDiv1
                                ?"projects__box-min__cont__icons" 
                                :"projects__box-min__cont__icons__out"} 
                        >
                            <abbr className="icon" title="HTML 5"><i className="uil uil-html5 "></i></abbr>
                            <abbr className="icon" title="CSS3"><i className="uil uil-css3-simple "></i></abbr>
                            <abbr className="icon" title="JavaScript"><i className='bx bxl-javascript'></i></abbr>
                            <abbr className="icon" title="React Js"><i className="uil uil-react "></i></abbr>
                        </div>  
                        <button 
                            type="text"         
                            className={contDiv1 
                                ?"box-min__btn button" 
                                :"box-min__btn__out"}
                            onClick={() => setSeeMore1(!seeMore1)}
                        >
                            ver mais...
                        </button>
                        
                    </div>
                </div>
                <div
                    onMouseEnter={() => setContDiv2(!contDiv2)}
                    onMouseLeave={() => setContDiv2(!contDiv2)}  
                    className="projects__box-min land-page"
                >
                <div className={contDiv2 
                ?"projects__box-min__cont__black" 
                :"projects__box-min__cont"}>
                        <div 
                            className={contDiv2 
                                ?"projects__box-min__cont__icons" 
                                :"projects__box-min__cont__icons__out"}
                            >
                            <abbr className="icon" title="HTML 5"><i className="uil uil-html5 "></i></abbr>
                            <abbr className="icon" title="CSS3"><i className="uil uil-css3-simple "></i></abbr>
                            
                        </div>  
                        <button 
                            type="text" 
                            className={contDiv2 
                                ?"box-min__btn button" 
                                :"box-min__btn__out"}
                            onClick={() => setSeeMore2(!seeMore2)}
                        >
                            ver mais...
                        </button>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setContDiv3(!contDiv3)}
                    onMouseLeave={() => setContDiv3(!contDiv3)} 
                    className="projects__box-min page-tribute"
                >
                <div className={contDiv3 
                ?"projects__box-min__cont__black" 
                :"projects__box-min__cont"}>
                        <div 
                            className={contDiv3 
                                ?"projects__box-min__cont__icons" 
                                :"projects__box-min__cont__icons__out"}
                        >
                            <abbr className="icon" title="HTML 5"><i className="uil uil-html5 "></i></abbr>
                            <abbr className="icon" title="CSS3"><i className="uil uil-css3-simple "></i></abbr>
                        </div>  
                        <button 
                            type="text" 
                            className={contDiv3 
                                ?"box-min__btn button" 
                                :"box-min__btn__out"}
                            onClick={() => setSeeMore3(!seeMore3)}
                        >
                            ver mais...
                        </button>
                    </div>
                </div> 
            </div>
            {seeMore1 && (
                            <div className="project__more">
                            <div className="project__content">
                                <div className="project__img__social">
                                    <img className="project__img" src={imageBlog} alt="" />
                                    <div className="project__social">
                                        <a className="project__btn" href="https://github.com/VICTOR-AZZOLINI-DEV/Projeto-Blog" target="_blank">
                                            <button className="project__btn button" >
                                                <i className="uil uil-window"></i>
                                            Repositório
                                            </button>
                                        </a>
                                        <a className="project__btn"
                                        href="https://projeto-blog-five.vercel.app/"
                                        target="_blank">
                                            <button className="project__btn button" >
                                                <i className="uil uil-github-alt"></i>
                                            Projeto
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__info">
                                    <h2 className="project__title">Lepetit.Blog</h2>
                                    <div className="project__text">
                                        <p>Construir um blog em React me permitiu aprender muitas coisas novas e me desafiou a aplicar minhas habilidades de front-end em um projeto real.</p>
                                        <br></br>
                                        <p>Com o React, pude criar componentes reutilizáveis e dinâmicos, tornando o desenvolvimento mais rápido e eficiente. Também aprendi a usar bibliotecas populares, como o React Router, que me permitiu criar rotas para diferentes páginas em meu blog.</p>
                                        <br></br>
                                        <p>Criar um blog em React não apenas me permitiu aprimorar minhas habilidades de desenvolvedor front-end, mas também me ajudou a desenvolver habilidades em design e gerenciamento de conteúdo.</p>
                                    </div>
                                </div>
                                <button onClick={() => setSeeMore1(!seeMore1)} className="project__close">
                                    <i className="uil uil-times"></i>
                                </button>
                            </div>
                            
                        </div>
            )}
            {seeMore2 && (
                            <div className="project__more">
                            <div className="project__content">
                                <div className="project__img__social">
                                    <img className="project__img" src={imageAndroid} alt="" />
                                    <div className="project__social">
                                        <a className="project__btn" href="https://github.com/VICTOR-AZZOLINI-DEV/projeto-android" target="_blank">
                                            <button className="project__btn button" >
                                                <i className="uil uil-window"></i>
                                            Repositório
                                            </button>
                                        </a>
                                        <a className="project__btn" href="https://victor-azzolini-dev.github.io/projeto-android/" target="_blank">
                                            <button className="project__btn button" >
                                                <i className="uil uil-github-alt"></i>
                                            Projeto
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__info">
                                    <h2 className="project__title">Projeto Android</h2>
                                    <div className="project__text">
                                        <p>O projeto Android é a criação de uma landing page, que me permitiu praticar a criação de layouts, manipulação de imagens, escolha de fontes, além de aplicar diferentes técnicas de design responsivo. Também pude aprofundar meus conhecimentos em HTML e CSS, e descobrir novas maneiras de otimizar a usabilidade do site.</p>
                                        <br></br>
                                        <p>Com esse projeto fiquei animado para continuar explorando e aprendendo mais sobre desenvolvimento front-end. Se você tiver alguma sugestão ou comentário, por favor, não hesite em compartilhar comigo.</p>
                                        <br></br>
                                    </div>
                                </div>
                                <button onClick={() => setSeeMore2(!seeMore2)} className="project__close">
                                    <i className="uil uil-times"></i>
                                </button>
                            </div>
                            
                        </div>
            )}
            {seeMore3 && (
                            <div className="project__more">
                            <div className="project__content">
                                <div className="project__img__social">
                                    <img className="project__img" src={imageTribute} alt="" />
                                    <div className="project__social">
                                        <a className="project__btn" href="https://github.com/VICTOR-AZZOLINI-DEV/projeto-tribute" target="_blank">
                                            <button className="project__btn button" >
                                                <i className="uil uil-window"></i>
                                            Repositório
                                            </button>
                                        </a>
                                        <a className="project__btn" href="https://victor-azzolini-dev.github.io/projeto-tribute/" target="_blank">
                                            <button className="project__btn button" >
                                                <i className="uil uil-github-alt"></i>
                                            Projeto
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="project__info">
                                    <h2 className="project__title">Projeto Tributo</h2>
                                    <div className="project__text">
                                        <p>Este projeto se trata de uma landing page usando HTML e CSS para aprimorar minhas habilidades como desenvolvedor front-end.
                                        </p>
                                        <br /> 
                                        <p>
                                        Mas esta página é muito mais do que apenas uma oportunidade para praticar minhas habilidades - ela também é uma homenagem às programadoras do ENIAC.</p>
                                        <br></br>
                                        <p>Minha página apresenta informações sobre as programadoras do ENIAC, seus papéis no desenvolvimento do ENIAC e sua contribuição para a história da computação.</p>
                                    </div>
                                </div>
                                <button onClick={() => setSeeMore3(!seeMore3)} className="project__close">
                                    <i className="uil uil-times"></i>
                                </button>
                            </div>
                            
                        </div>
            )}
                        
        </section> 
    )
}

export default Projects
