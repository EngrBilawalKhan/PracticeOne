import React from 'react'
import Link from 'next/link'
const ServicesComponent = () => {
  return (
    <>
      
<section className="services" id="services" data-aos="flip-up">
    <h2 className="heading">Our <span>Services</span></h2>
    <div className="services-container">
        <div className="services-box" data-aos="zoom-in-up">
            <i className="bx bx-code-alt"></i>
            <h3>Web Developement</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsa illum maiores!</p>
            <Link className='btn btn-cv' href="/">Read More </Link>
        </div>
        <div className="services-box" data-aos="zoom-in-down">
            <i className="bx bx-paint"></i>
            <h3>Graphic Desinging</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsa illum maiores!</p>
            <Link className='btn btn-cv' href="/">Read More </Link>
        </div>
        <div className="services-box" data-aos="zoom-in-left">
            <i className="bx bx-chart"></i>
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ipsa illum maiores!</p>
            <Link className='btn btn-cv' href="/">Read More </Link>
        </div>
    </div>
</section>
    </>
  )
}

export default ServicesComponent
