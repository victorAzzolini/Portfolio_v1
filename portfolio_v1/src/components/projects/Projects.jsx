import { useState } from "react"
import image from "../../assets/lepetit-blog.png"

import "./projects.css"
import ProjectSeeMore from "./ProjectSeeMore"

function Projects() {
    const [contDiv1, setContDiv1] = useState(false)
    const [contDiv2, setContDiv2] = useState(false)
    const [contDiv3, setContDiv3] = useState(false)
    const [seeMore1, setSeeMore1] = useState(false)

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
                            <abbr className="icon" title="JavaScript"><i className="uil uil-java-script"></i></abbr>
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
                        <button type="text" className={contDiv2 
                                ?"box-min__btn button" 
                                :"box-min__btn__out"}>
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
                        <button type="text" className={contDiv3 
                                ?"box-min__btn button" 
                                :"box-min__btn__out"}>
                            ver mais...
                        </button>
                    </div>
                </div> 
            </div>
            {seeMore1 && (
                            <div className="project__more">
                            <div className="project__content">
                                <div className="project__img__social">
                                    <img className="project__img" src={image} alt="" />
                                    <div className="project__social">
                                        <button className="project__btn button">
                                            <a href="https://projeto-blog-five.vercel.app/" target="_blank">
                                                <i className="uil uil-window"></i>
                                            Repositório
                                            </a>
                                        </button>
                                        <button className="project__btn button">
                                            <a href="https://github.com/VICTOR-AZZOLINI-DEV/Projeto-Blog" target="_blank">
                                                <i className="uil uil-github-alt"></i>
                                            Projeto
                                            </a>
                                        </button>
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
        </section> 
    )
}

export default Projects
