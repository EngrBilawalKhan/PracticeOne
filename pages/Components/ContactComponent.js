import React from 'react'

const ContactComponent = () => {
  return (
    <>
   <section className="contact" id="contact" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
    <h2 className="heading">Contact <span>Me!</span></h2>

    <form action="#">
        <div className="input-box">
            <input type="text"placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit"placeholder="Send Message" className="btn" />
       
    </form>
</section>
    </>
  )
}

export default ContactComponent
