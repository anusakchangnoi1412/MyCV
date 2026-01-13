import './Project.css';
import project1 from "@/assets/img/project-1.png";

export default function Project() {
    return (
        <section className="Project">
            <div className='project-header'>
                <h3>Projects</h3>
            </div>
            <span className='mb-4'> Here are some of the projects i've worked on recently: </span>

            <div className='project-container'>
                <div style={{ width: '80%' }} className='container'>
                    {/* <div id="projectCarousel" className='carousel slide' data-bs-ride='carousel' > */}
                    <div id="projectCarousel" className='carousel slide'>
                        <div className='carousel-inner'>

                            <div className='carousel-item active'>
                                <div className='row g-4'>
                                    <div className='col-4'>
                                        <div className='card h-100'>
                                            <div className="card-header">
                                                <h5 className='card-title'> Portfolio Website </h5>
                                            </div>
                                            <img src={project1} className='card-img-top' alt="" />
                                            <div className='card-body'>
                                                <p className="card-text">Make by HTML, CSS, Ract, Bootstrap</p>
                                                <a href="#" className="btn btn-primary btn-sm">Demo</a>
                                                <a 
                                                href="https://github.com/anusakchangnoi1412/MyCV"
                                                className="btn btn-outline-dark btn-sm"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >
                                                    GitHub
                                                    </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-4'>
                                        <div className='card h-100'>
                                            <div className="card-header">
                                                <h5 className='card-title'> Comming Soon... </h5>
                                            </div>
                                            <img src="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg" className='card-img-top' alt="" />
                                            <div className='card-body'>
                                                <h5 className="card-title">Comming Soon...</h5>
                                                {/* <p className="card-text">HTML, CSS, Bootstrap</p> */}
                                                {/* <a href="#" className="btn btn-primary btn-sm">Demo</a>
                                            <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-4'>
                                        <div className='card h-100'>
                                            <div className='card-body'>
                                                <div className="card-header">
                                                    <h5 className='card-title'> Comming Soon... </h5>
                                                </div>
                                                <img src="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg" className='card-img-top' alt="" />
                                                <h5 className="card-title">Comming Soon...</h5>
                                                {/* <p className="card-text">HTML, CSS, Bootstrap</p> */}
                                                {/* <a href="#" className="btn btn-primary btn-sm">Demo</a>
                                            <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='carousel-item'>
                                <div className='row g-4'>

                                    <div className='col-4'>
                                        <div className='card h-100'>
                                            <div className="card-header">
                                                <h5 className='card-title'> Comming Soon... </h5>
                                            </div>
                                            <img src="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg" className='card-img-top' alt="" />
                                            <div className='card-body'>
                                                <h5 className="card-title">Comming Soon...</h5>
                                                {/* <p className="card-text">HTML, CSS, Bootstrap</p> */}
                                                {/* <a href="#" className="btn btn-primary btn-sm">Demo</a>
                                            <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-4'>
                                        <div className='card h-100'>
                                            <div className='card-body'>
                                                <div className="card-header">
                                                    <h5 className='card-title'> Comming Soon... </h5>
                                                </div>
                                                <img src="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg" className='card-img-top' alt="" />
                                                <h5 className="card-title">Comming Soon...</h5>
                                                {/* <p className="card-text">HTML, CSS, Bootstrap</p> */}
                                                {/* <a href="#" className="btn btn-primary btn-sm">Demo</a>
                                            <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-4'>
                                        <div className='card h-100'>
                                            <div className='card-body'>
                                                <div className="card-header">
                                                    <h5 className='card-title'> Comming Soon... </h5>
                                                </div>
                                                <img src="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg" className='card-img-top' alt="" />
                                                <h5 className="card-title">Comming Soon...</h5>
                                                {/* <p className="card-text">HTML, CSS, Bootstrap</p> */}
                                                {/* <a href="#" className="btn btn-primary btn-sm">Demo</a>
                                            <a href="#" className="btn btn-outline-dark btn-sm">GitHub</a> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}