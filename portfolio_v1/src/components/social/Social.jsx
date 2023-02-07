import "./social.css"

function Social() {
    return(
        <footer className="home__social">
            <a target="_blank" href="https://www.instagram.com/victorazzolini/" className="social__link">
                <i className="uil uil-instagram"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/victor.azzolini/" className="social__link">
                <i className="uil uil-facebook"></i>
            </a>
            <a target="_blank" href="https://github.com/VICTOR-AZZOLINI-DEV" className="social__link">
                <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://www.linkedin.com/in/victor-azzolini-b7b961231/" target="_blank"className="social__link">
                <i className="uil uil-github"></i>
            </a>
        </footer>
    )
}

export default Social;