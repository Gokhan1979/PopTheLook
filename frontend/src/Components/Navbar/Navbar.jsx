import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'

export default function Navbar(){
  const [user,setUser]=useState(localStorage.getItem('user'))
  const [cartCount,setCartCount]=useState(0)
  const navigate=useNavigate()

  useEffect(()=>{
    const update=()=>{
      setUser(localStorage.getItem('user'))
      const cart=JSON.parse(localStorage.getItem('ptl_cart')||'[]')
      setCartCount(cart.length)
    }
    update()
    const id=setInterval(update, 500)
    return()=>clearInterval(id)
  },[])

  const handleAuth=()=>{
    if(user){
      localStorage.removeItem('user')
      setUser(null)
      navigate('/login')
    }else{
      navigate('/login')
    }
  }

  return(
    <nav className="navbar">
      {/* LEFT */}
      <Link to="/" className="logo">POP THE LOOK</Link>

      {/* MIDDLE - ANIMATED SEARCH */}
      <div className="navbar-center">
        <SearchBar />
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        <Link to="/shop">SHOP</Link>
        <span onClick={handleAuth} className="auth-link">
          {user ? 'SIGN OUT' : 'SIGN IN'}
        </span>
        <Link to="/cart" className="bag-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span>({cartCount})</span>
        </Link>
      </div>
    </nav>
  )
}
