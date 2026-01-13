import './Contact.css'

export default function Contact() {
    return (
        <section className='Contact'>

            <div className='contact-header'>
                <h3>Contact Here</h3>
            </div>
            <div className='contact-info w-100' >
                <p> Free to reach out if you have any queston or want to connect!!</p>
                <div className='contact-socail w-100'>
                    <div className='row with-border'>
                        <div className='col-4'>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png" href="#" alt="" /></a>
                            <span> anusakchangnoi1412@gmail.com </span>
                        </div>
                        <div className='col-4'>
                            <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670089.png" href="#" alt="" /></a>
                            <span> Euro </span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
