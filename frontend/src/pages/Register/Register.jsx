import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register(){
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const navigate=useNavigate()
  const register=(e)=>{
    e.preventDefault()
    localStorage.setItem('user', email)
    navigate('/')
  }
  return(
    <div style={{maxWidth:'400px',margin:'80px auto',padding:'20px',textAlign:'center'}}>
      <h1 style={{fontFamily:'serif',letterSpacing:'4px'}}>CREATE ACCOUNT</h1>
      <form onSubmit={register} style={{marginTop:'30px',textAlign:'left'}}>
        <label style={{fontSize:'10px',letterSpacing:'1px'}}>EMAIL</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" style={{width:'100%',padding:'12px',border:'1px solid #ddd',margin:'8px 0 20px'}}/>
        <label style={{fontSize:'10px',letterSpacing:'1px'}}>PASSWORD</label>
        <input value={pass} onChange={e=>setPass(e.target.value)} required type="password" style={{width:'100%',padding:'12px',border:'1px solid #ddd',margin:'8px 0 20px'}}/>
        <button type="submit" style={{background:'black',color:'white',width:'100%',padding:'14px',border:'none',letterSpacing:'2px',cursor:'pointer'}}>REGISTER</button>
      </form>
      <p style={{fontSize:'11px',marginTop:'20px'}}>Already have account? <Link to="/login" style={{color:'#000',textDecoration:'underline'}}>Sign In</Link></p>
    </div>
  )
}
