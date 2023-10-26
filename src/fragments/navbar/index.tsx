import './index.css'

export default function Navbar() {
    return (
        <nav> 
        <div>
            <a href="#">
                <h1>ALFIN<span style={{color: "orange"}}>PRASETYA</span></h1>
            </a>
        </div>
        <div className='menu'>
            <a href="#about">About</a>
            <a href="#portofolio">Portofolio</a>
            <a href="/">Contact</a>
        </div>
        <div>
            <input type="search" name="search" id="" style={{width: "100%"}}/>
        </div>
        </nav>
    )
}