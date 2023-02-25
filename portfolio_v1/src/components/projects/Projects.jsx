import imageBlog from "../../assets/lepetit-blog.png"

import "./projects.css"

function Projects() {
    return (
        <section id="projects" className="projects__main">
            <h2 className="projects__title">Projetos</h2>
            <div className="projects container">
                <div className="projects__box-min">
                    <div className="projects__box-min__cont">
                        <div className="projects__box-min__cont__icons">
                            <abbr className="icon" title="HTML 5"><i className="uil uil-html5 "></i></abbr>
                            <abbr className="icon" title="CSS3"><i className="uil uil-css3-simple "></i></abbr>
                            <abbr className="icon" title="JavaScript"><i className="uil uil-java-script"></i></abbr>
                            <abbr className="icon" title="React Js"><i className="uil uil-react "></i></abbr>
                        </div>  
                        <button type="text" className="button box-min__btn">
                            ver mais...
                        </button>
                    </div>
                </div>
                <div className="projects__box-min">
                    
                </div>
                <div className="projects__box-min">
                    
                </div> 
                <div className="projects__box-min">
                    
                </div> 
                <div className="projects__box-min">
                    
                </div> 
                <div className="projects__box-min">
                    
                </div> 
                <div className="projects__box-min">
                    
                </div> 
            </div>
        </section> 
    )
}

export default Projects
