import React from 'react'
import Link from 'next/link';
const HeroComponent = () => {
  return (
    <>
       <section className="home" id="home" data-aos="zoom-out-up">
    <div className="home-content">
        <h3 className='animate__animated animate__fadeInUp'>Hello, Its Me</h3>
        <h1 className='animate__animated animate__fadeInLeft'>Bilawal Khan Bilal</h1>
        <h3 className='animate__animated animate__slideInDown'>I am <span className="multiple-text "> </span>
        <span className='auto-input'>Software Engineer</span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, doloremque enim qui aliquid necessitatibus explicabo?</p>
        <div className="social-media">
         <Link className='nav-link' href={"/"}><i className="bx bxl-facebook"></i></Link>
         <Link className='nav-link' href={"https://www.youtube.com/@ZBAHTech"}><i className="bx bxl-youtube"></i></Link>
         <Link className='nav-link' href={"/"}><i className="bx bxl-instagram"></i></Link>
         <Link className='nav-link' href={"https://www.linkedin.com/in/engrbilawalkhanbilal/"}><i className="bx bxl-linkedin"></i></Link>
         <Link className='nav-link' href={"/"}><i className="bx bxl-twitter"></i></Link>
        </div>
        <Link className='btn btn-cv' href="/">Download CV </Link>
    </div>
    <div className="home-img"  data-aos="flip-left">
{/* <div className="frame">
<img className='cropped1' src="/img/studio.png" alt="" />
</div> */}
<img src="/img/profile.png" alt="" align="bottom"></img>
    </div>
</section>
    </>
  )
}

export default HeroComponent
