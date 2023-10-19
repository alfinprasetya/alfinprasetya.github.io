import './index.css'

export default function Headline() {
    return (
        <div className='headline'>
            <div className='text-box'>
                <h1>
                    I'm <span style={{color: "orange"}}>Alfin Prasetya</span>
                </h1>
                <h2>Fullstack & Android Developer</h2>
                <button>Contact Me</button>
            </div>
            <div className='headline-image'>
            </div>
            <div className="icons">
                <a href="/"><i className="fa-brands fa-instagram"></i></a>
                <a href="/"><i className="fa-brands fa-facebook"></i></a>
                <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="/"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    )
}