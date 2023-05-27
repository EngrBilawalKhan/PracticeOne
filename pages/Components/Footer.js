import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
          <footer className="footer">
        <div className="footer-text">
            <p>Copyright &#169; 2023 by ZBAH Tech | All Rights are Reserved.</p>
        </div>
        <div className="footer-iconTop">
            <Link href="/"><i className="bx bx-up-arrow-alt"></i></Link>
        </div>
    </footer>
    </>
  )
}

export default Footer;
