import './NavigationBar.css';

export default function NavigationBar() {
    return (

        <div className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <a href="/"><h1 id="left-name" height="100%">WATCHING THE WATCHMEN PROJECT</h1></a>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

    )

}
