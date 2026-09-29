import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Verify(){
 const [params] = useSearchParams();
 const token = params.get('token');
 const navigate = useNavigate();

 useEffect(()=>{
  // Call backend /api/users/verify?token=xxx
  // Backend verifies and returns JWT
  async function verify(){
   try{
    const res = await fetch(`/api/users/verify?token=${token}`);
    if(res.ok){
     // After verification -> Homepage -> Immediately open profile form
     localStorage.setItem('token', token);
     navigate('/?verified=true');
     setTimeout(()=> navigate('/profile'), 500); // Open profile form immediately
    }
   }catch(e){ navigate('/login'); }
  }
  verify();
 }, [token]);

 return <div style={{textAlign:'center', marginTop:100}}>
  <h2>Verifying your email...</h2>
  <p>You will be directed to homepage and profile form</p>
 </div>
}
