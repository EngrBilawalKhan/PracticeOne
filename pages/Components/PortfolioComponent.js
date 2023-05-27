import React from 'react'
import Link from 'next/link'
const PortfolioComponent = () => {
  return (
    <>
     <section className="portfolio" id="portfolio" data-aos="flip-left">
    <h2 className="heading">Latest <span>Project</span></h2>
    <div className="portfolio-container">
        <div className="portfolio-box" data-aos="zoom-in-up">
            <img src="/img/studios.jpg" alt=""/>
            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
        </div>
        <div className="portfolio-box" data-aos="zoom-in-down">
            <img src="/img/studio.jpg" alt=""/>
            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
        </div>
        <div className="portfolio-box" data-aos="zoom-in-left">
            <img src="/img/clix.jpg" alt=""/>
            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
        </div>
        <div className="portfolio-box" data-aos="zoom-in-down">
            <img src="/img/profile.jpg" alt=""/>
            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
        </div>
        <div className="portfolio-box" data-aos="zoom-in-left">
            <img src="/img/studio.png" alt=""/>
            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
        </div>
        <div className="portfolio-box" data-aos="zoom-in-right">
            <img src="/img/modeling.jpg" alt=""/>
            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
        </div>
    </div>
</section> 
    </>
  )
}

export default PortfolioComponent
