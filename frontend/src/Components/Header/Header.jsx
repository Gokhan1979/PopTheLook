import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

export default function Header(){
  const [user,setUser]=useState(null)
  const navigate=useNavigate()
  const [q,setQ]=useState('')

  useEffect(()=>{
    const u=localStorage.getItem('user')
    setUser(u)
    const id=setInterval(()=>setUser(localStorage.getItem('user')),1000)
    return()=>clearInterval(id)
  },[])

  const doSearch=(e)=>{
    e.preventDefault()
    if(q) navigate(`/shop?search=${q}`)
  }

  return(
    <header style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'#fff',zIndex:99}}>
      <Link to="/" style={{textDecoration:'none',color:'#000',fontWeight:'bold',letterSpacing:'3px',fontFamily:'serif'}}>POP THE LOOK</Link>
      
      <form onSubmit={doSearch} style={{display:'flex',border:'1px solid #ddd',padding:'6px 10px',width:'200px'}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." style={{border:'none',outline:'none',flex:1,fontSize:'11px'}}/>
        <button type="submit" style={{border:'none',background:'none'}}>⌕</button>
      </form>

      <div style={{display:'flex',gap:'12px',justifyContent:'flex-end',alignItems:'center'}}>
        <Link to="/cart" style={{textDecoration:'none',color:'#000',fontSize:'11px'}}>BAG 👜</Link>
        {user? <button onClick={()=>{localStorage.removeItem('user');setUser(null);navigate('/login')}} style={{background:'#000',color:'#fff',border:'none',padding:'5px 10px',fontSize:'9px'}}>SIGN OUT</button> : <Link to="/login" style={{fontSize:'11px',color:'#000',textDecoration:'none'}}>SIGN IN</Link>}
      </div>
    </header>
  )
}
