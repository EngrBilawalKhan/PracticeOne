import React from 'react'
import Link from 'next/link'
const ScrollNav = () => {
  return (
    <div>
        <div className="Scroll-Nav">
            <ul className="navbar-nav">
            <li className="nav-item active">
        <Link className='nav-link' href={"#about"}>About<i class='bx bxs-arrow-to-right'></i></Link>
      
    </li>
    <li className="nav-item">
    <Link className='nav-link' href={"#services"}>Services<i class='bx bxs-arrow-to-right'></i></Link>
    </li>
    <li className="nav-item">
    <Link className='nav-link' href={"#portfolio"}>Portfolio<i class='bx bxs-arrow-to-right'></i></Link>
    </li>
      <li className="nav-item">
    <Link className='nav-link' href={"#contact"}>Contact<i class='bx bxs-arrow-to-right'></i></Link>
    </li>
            </ul>
        </div>
    </div>
  )
}

export default ScrollNav
