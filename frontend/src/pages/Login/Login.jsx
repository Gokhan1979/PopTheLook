import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

export default function Login(){
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const navigate=useNavigate()

  const login=(e)=>{
    e.preventDefault()
    if(email && pass){
      localStorage.setItem('user', email)
      navigate('/')
    }
  }

  return(
    <div style={{maxWidth:'400px',margin:'80px auto',padding:'20px',textAlign:'center'}}>
      <h1 style={{fontFamily:'serif',letterSpacing:'4px'}}>SIGN IN</h1>
      <p style={{fontSize:'11px',color:'#999',marginTop:'10px',letterSpacing:'1px'}}>Welcome back to POP THE LOOK</p>

      <form onSubmit={login} style={{marginTop:'30px',textAlign:'left'}}>
        <label style={{fontSize:'10px',letterSpacing:'1px'}}>EMAIL</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required style={{width:'100%',padding:'12px',border:'1px solid #ddd',margin:'8px 0 20px',outline:'none'}} placeholder="you@email.com"/>

        <label style={{fontSize:'10px',letterSpacing:'1px'}}>PASSWORD</label>
        <input value={pass} onChange={e=>setPass(e.target.value)} type="password" required style={{width:'100%',padding:'12px',border:'1px solid #ddd',margin:'8px 0 20px',outline:'none'}} placeholder="••••••••"/>

        <button type="submit" style={{background:'black',color:'white',width:'100%',padding:'14px',border:'none',letterSpacing:'2px',cursor:'pointer',marginTop:'10px'}}>SIGN IN</button>
      </form>

      <p style={{fontSize:'11px',marginTop:'20px'}}>Don't have account? <Link to="/register" style={{textDecoration:'underline',color:'#000'}}>Register</Link></p>
      <p style={{fontSize:'10px',color:'#999',marginTop:'30px'}}>Demo: use any email/pass - SIGN OUT will appear in navbar after login</p>
    </div>
  )
}
