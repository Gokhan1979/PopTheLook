import Navbar from '../Navbar/Navbar'
import './Header.css'

export default function Header(){
  return(
    <header className="site-header">
      <div className="topbar">
        FREE SHIPPING OVER £100 • FREE RETURNS • NEW COLLECTION
      </div>
      <Navbar />
    </header>
  )
}
