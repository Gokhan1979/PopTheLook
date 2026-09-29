import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer(){
  return(
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h4>POP THE LOOK</h4>
          <p>Summer blooms collection 2026</p>
        </div>
        <div>
          <h5>SHOP</h5>
          <Link to="/shop">All Products</Link>
          <Link to="/shop?cat=Dresses">Dresses</Link>
          <Link to="/shop?cat=Tops">Tops</Link>
        </div>
        <div>
          <h5>HELP</h5>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">My Account</Link>
        </div>
        <div>
          <h5>LEGAL</h5>
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
      <div className="footer-bottom">© 2026 POP THE LOOK - All rights reserved</div>
    </footer>
  )
}
