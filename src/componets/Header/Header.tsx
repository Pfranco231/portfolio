import { NavLink } from "react-router-dom"


function Header() {

  return (
    <header>
        <NavLink to="/" className="NavLink-Header"><img src="/icon.png" alt="" style={{width: '50px'}} /><h1 style={{fontSize: '30px'}}>Frank</h1></NavLink>
        <ul>
          <li><a href="https://github.com/Pfranco231"><img src="/github.png" className="github" alt="" /></a></li>
          <li><a href="https://www.instagram.com/franqx35/"><img src="/instagram.png" className="instagram" /></a></li>
          <li><a href="https://wa.me/5493544534897/"><img src="/whatsapp.png" alt="" className="whatsapp" /></a></li>
        </ul>
    </header>
  )
}

export default Header