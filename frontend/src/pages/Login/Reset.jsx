import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Reset(){
 const [params] = useSearchParams();
 const token = params.get('token');
 const [pass,setPass]=useState('');
 const [confirm,setConfirm]=useState('');
 const nav = useNavigate();

 const handle = async(e)=>{
  e.preventDefault();
  if(pass!== confirm) return alert('Passwords dont match');
  await fetch('/api/users/reset', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({token, newPassword: pass, confirmPassword: confirm})});
  alert('Password reset! Now sign in');
  nav('/login'); // DIRECT TO SIGNIN PAGE as you requested
 }

 return <div style={{maxWidth:400, margin:'80px auto', padding:20, border:'1px solid #eee'}}>
  <h1>Reset password</h1>
  <form onSubmit={handle}>
   <input type="password" placeholder="New password" value={pass} onChange={e=>setPass(e.target.value)} required style={{width:'100%', padding:14, marginBottom:10}}/>
   <input type="password" placeholder="Confirm new password" value={confirm} onChange={e=>setConfirm(e.target.value)} required style={{width:'100%', padding:14, marginBottom:15}}/>
   <button style={{width:'100%', background:'black', color:'white', padding:14}}>RESET PASSWORD</button>
  </form>
 </div>
}
