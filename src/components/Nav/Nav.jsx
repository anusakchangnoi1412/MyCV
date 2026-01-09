import './Nav.css'

export default function Nav() {
    return (
        <nav style={{ width: "100%", paddingRight: "80px" }} className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Anusak Changnoi</a>
                
                <div id="navbarNav">
                    <ul  className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <button style={{ width: "100%" }} className='btn fw-bold' >CV</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}