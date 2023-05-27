import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
 <nav className="navbar">
 <Link className='nav-link logo' href={"/"}>
  <Image className='img-fluid logo-img' src="/img/logo.svg" alt="img" width={100} height={100} />
</Link>
 <input type="checkbox" id="openSidebarMenu" />
    <label for="openSidebarMenu" class="sidebarIconToggle">
   <div class="spinner top"></div>
   <div class="spinner middle"></div>
   <div class="spinner bottom"></div>     
        </label>
    <div id="sidebarMenu">
        <ul>
        <li className="nav-item active">
        <Link className='nav-link' href={"About"}>About</Link>
    </li>
    <li className="nav-item">
    <Link className='nav-link' href={"Services"}>Services</Link>
    </li>
    <li className="nav-item">
    <Link className='nav-link' href={"Portfolio"}>Portfolio</Link>
    </li>
      <li className="nav-item">
    <Link className='nav-link' href={"Contact"}>Contact</Link>
    </li>
           
        </ul>
    </div>
 </nav>

    </>
  )
}

export default Navbar