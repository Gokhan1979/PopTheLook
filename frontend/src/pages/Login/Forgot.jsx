import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Forgot(){
 const [email,setEmail]=useState('');
 const nav = useNavigate();
 const handle = async(e)=>{
  e.preventDefault();
  await fetch('/api/users/forgot', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email})});
  alert('Reset email sent to ' + email + ' - Check your inbox!');
 }
 return <div style={{maxWidth:400, margin:'80px auto', padding:20, border:'1px solid #eee'}}>
  <h1 style={{fontFamily:'serif'}}>Forgot password</h1>
  <p>Enter your email - we will send reset link</p>
  <form onSubmit={handle}>
   <input type="email" placeholder="you@email.com" value={email} onChange={e=>setEmail(e.target.value)} required style={{width:'100%', padding:14, marginBottom:15}}/>
   <button style={{width:'100%', background:'black', color:'white', padding:14}}>SEND RESET LINK</button>
  </form>
 </div>
}
