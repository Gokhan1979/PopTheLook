import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login(){
 const [email,setEmail]=useState(''); const [pass,setPass]=useState('');
 const nav=useNavigate();
 const handle=async(e)=>{
  e.preventDefault();
  // call backend /api/users/login
  nav('/');
 }
 return <div style={{maxWidth:400, margin:'50px auto', padding:20}}>
  <h1>Welcome back</h1>
  <form onSubmit={handle}>
   <input placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:12, marginBottom:10}}/>
   <input placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={{width:'100%', padding:12, marginBottom:20}}/>
   <button style={{width:'100%', background:'black', color:'white', padding:14}}>SIGN IN</button>
  </form>
  <Link to="/forgot">Forgot your password?</Link><br/>
  <Link to="/register">Create account</Link>
 </div>
}
