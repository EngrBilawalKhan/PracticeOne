import React from 'react'
import Link from 'next/link';
const AboutComponent = () => {
  return (
    <>
            <section className="about" id="about" data-aos="flip-right">
    <div className="about-img">
        <div className="frame">
            <img className='cropped1' src="/img/profile.png" alt="" />
            </div>
    </div>
    <div className="about-content">
        <h2 className="heading"> About <span>Me</span> </h2>
        <h3>Frontend Developer</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolore fugit perspiciatis minus nulla quam!</p>
        <Link className='btn btn-cv' href="/">Read More </Link>
    </div>
</section>
    </>
  )
}

export default AboutComponent
