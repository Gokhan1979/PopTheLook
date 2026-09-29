import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'

export default function Login(){
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handle = async(e)=>{
    e.preventDefault();
    try{
      const res = await fetch('/api/users/login', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({email, password: pass})
      });
      const data = await res.json();
      if(!res.ok) return alert(data.message);

      login(data.user, data.token);

      // If profile not completed -> open profile form immediately
      if(data.needsProfile){
        nav('/profile');
      } else {
        nav('/'); // Homepage
      }
    }catch(err){ alert('Login failed'); }
  }

  return <div style={{maxWidth:400, margin:'80px auto', padding:20, border:'1px solid #eee'}}>
    <h1 style={{fontFamily:'serif'}}>Welcome back</h1>
    <form onSubmit={handle}>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={{width:'100%', padding:14, marginBottom:10}}/>
      <input type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)} required style={{width:'100%', padding:14, marginBottom:20}}/>
      <button style={{width:'100%', background:'black', color:'white', padding:14}}>SIGN IN</button>
    </form>
    <div style={{marginTop:15, textAlign:'center'}}>
      <Link to="/forgot" style={{color:'black'}}>Forgot your password?</Link><br/><br/>
      <span>Don't have account? </span><Link to="/register" style={{color:'black', fontWeight:'bold'}}>Create account</Link>
    </div>
  </div>
}
