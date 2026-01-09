import './Hero.css'

export default function Hero() {
  return (
    <section className='Hero'>
      <div className='info' >
        <h1>Anusak Changnoi</h1>
        <h2>Junior Developer</h2>
        <p style={{ textShadow: '0px 0px' }} >
          I've never worked directly in this field before, but I want to start something new and step out of my comfort zone.
        </p>
        <a href="#contact">
          <button className='btn btn-primary btn-primary-custom'>Contact Me</button>
        </a>
      </div>
      <div className='profile' >
          <img src="https://reactjsexample.com/content/images/2022/02/Code-2022-10-57-11.jpg" alt="" />
      </div>
    </section>
  )
}
