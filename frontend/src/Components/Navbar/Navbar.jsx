import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'

export default function Navbar(){
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const cartCount = JSON.parse(localStorage.getItem('cart')||'[]').length;

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  // Check if user came from email verification
  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    if(params.get('verified') === 'true'){
      // Immediately open profile form after homepage
      setTimeout(()=> navigate('/profile'), 800);
    }
  },[]);

  return (
    <nav style={{background:'black', color:'white', padding:'15px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:1000}}>
      {/* LOGO */}
      <Link to="/" style={{color:'white', textDecoration:'none', fontWeight:'bold', letterSpacing:'2px', fontSize:18}}>
        POP THE LOOK
      </Link>

      {/* MENU LINKS */}
      <div style={{display:'flex', gap:20, alignItems:'center'}}>
        <Link to="/shop" style={{color:'white', textDecoration:'none'}}>Shop</Link>
        <Link to="/about" style={{color:'white', textDecoration:'none'}}>About</Link>

        {/* CART */}
        <Link to="/cart" style={{color:'white', textDecoration:'none', position:'relative'}}>
          Cart {cartCount > 0 && <span style={{background:'white', color:'black', borderRadius:'50%', padding:'2px 6px', fontSize:12, marginLeft:5}}>{cartCount}</span>}
        </Link>

        {/* AUTH LOGIC */}
        {!user? (
          <>
            <Link to="/login" style={{color:'white', textDecoration:'none', border:'1px solid white', padding:'6px 15px'}}>Sign In</Link>
            <Link to="/register" style={{background:'white', color:'black', textDecoration:'none', padding:'6px 15px'}}>Create Account</Link>
          </>
        ) : (
          <div style={{position:'relative'}}>
            <button onClick={()=> setShowProfileMenu(!showProfileMenu)} style={{background:'white', color:'black', border:'none', padding:'8px 15px', cursor:'pointer'}}>
              {user.name? `${user.name}` : user.email.split('@')[0]} ▾
            </button>

            {showProfileMenu && (
              <div style={{position:'absolute', right:0, top:40, background:'white', color:'black', minWidth:200, boxShadow:'0 5px 20px rgba(0,0,0,0.2)', padding:10}}>
                <div style={{padding:'10px', borderBottom:'1px solid #eee'}}>
                  <strong>{user.name} {user.surname}</strong><br/>
                  <small>{user.email}</small>
                </div>
                <Link to="/profile" onClick={()=> setShowProfileMenu(false)} style={{display:'block', padding:'10px', color:'black', textDecoration:'none'}}>Profile Form</Link>
                <Link to="/orders" onClick={()=> setShowProfileMenu(false)} style={{display:'block', padding:'10px', color:'black', textDecoration:'none'}}>My Orders</Link>
                <Link to="/wishlist" onClick={()=> setShowProfileMenu(false)} style={{display:'block', padding:'10px', color:'black', textDecoration:'none'}}>Wishlist</Link>
                <button onClick={handleLogout} style={{width:'100%', padding:'10px', background:'black', color:'white', border:'none', marginTop:10, cursor:'pointer'}}>Sign Out</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
