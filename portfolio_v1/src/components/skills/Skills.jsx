import "./skills.css"

function Skills() {
    return (
        <section id="skills" className="skills container">
            <h2 className="skills__title">Skills</h2>
            <div className="skills__icons">
                <abbr className="skills__icon" title="HTML 5"><i className="uil uil-html5 "></i></abbr>
                <abbr className="skills__icon" title="CSS3"><i className="uil uil-css3-simple "></i></abbr>
                <abbr className="skills__icon" title="JavaScript"><i className='bx bxl-javascript'></i></abbr>
                <abbr className="skills__icon" title="React Js"><i className="uil uil-react "></i></abbr>
                <abbr className="skills__icon" title="Node.js"><i className="uil uil-java-script"></i></abbr>
            </div>
        </section>
    )
}

export default Skills