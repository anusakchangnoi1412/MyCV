import './Hero.css'
import profile from "@/assets/img/profile.jpg";
export default function Hero() {
  return (
    <section className='Hero'>
      <div className='info' >
        <h1>Hi, Welcome to MyCV Site</h1>
        <h2>Finding a <span style={{ color: "red" }}>Junior Full Stack Developer</span></h2>
        <p style={{ textShadow: '0px 0px' }} >
          I've never worked directly in this field before, but I want to start something new and step out of my comfort zone.
        </p>


        <a href="#contact">
          <button className="btn btn-primary btn-primary-custom">
            Contact Me
          </button>
        </a>
      </div>
      <div className='profile' >
        <img src={profile} alt="project" />
      </div>
    </section>
  )
}
