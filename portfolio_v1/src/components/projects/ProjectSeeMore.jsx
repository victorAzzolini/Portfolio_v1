import "./projectSeeMore.css"

import image from "../../assets/lepetit-blog.png"

function ProjectSeeMore({img, text, title, linkSite, linkRep}) {
    return (
        <div className="project__more">
            <div className="project__content">
                <div className="project__img__social">
                    <img className="project__img" src={image} alt="" />
                    <div className="project__social">
                        <a href={linkSite} target="_blank">
                            <i className="uil uil-window"></i>
                            Repositório
                        </a>
                        <a href={linkRep} target="_blank">
                            <i className="uil uil-github-alt"></i>
                            Projeto
                        </a>
                    </div>
                </div>
                <div className="project__info">
                    <h2 className="project__title">{title}</h2>
                    <p className="project__text">{text}</p>
                </div>
                <button className="project__close">
                    <i className="uil uil-times"></i>
                </button>
            </div>
            
        </div>
    )
}

export default ProjectSeeMore