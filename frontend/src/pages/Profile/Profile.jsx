import { useNavigate } from 'react-router-dom'

export default function Profile(){
  const user=localStorage.getItem('user')
  const navigate=useNavigate()

  if(!user){
    navigate('/login')
    return null
  }

  return(
    <div style={{maxWidth:'600px',margin:'40px auto',padding:'20px'}}>
      <h1 style={{fontFamily:'serif',letterSpacing:'4px'}}>MY PROFILE</h1>
      <div style={{marginTop:'30px',background:'#f9f9f9',padding:'20px'}}>
        <p style={{fontSize:'11px',letterSpacing:'1px',color:'#999'}}>EMAIL</p>
        <p style={{marginTop:'8px'}}>{user}</p>
        <button onClick={()=>{
          localStorage.removeItem('user')
          navigate('/login')
        }} style={{background:'black',color:'white',padding:'12px 20px',border:'none',marginTop:'20px',letterSpacing:'1px',cursor:'pointer'}}>SIGN OUT</button>
      </div>
    </div>
  )
}
