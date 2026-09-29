export default function Forgot(){
 return <div style={{maxWidth:400, margin:'50px auto'}}>
  <h1>Forgot password</h1>
  <input placeholder="Enter your email" type="email" style={{width:'100%', padding:12}}/>
  <button style={{width:'100%', background:'black', color:'white', padding:14, marginTop:10}}>SEND RESET LINK</button>
  <p>Email will be sent from backend/src/services/emailService.js</p>
 </div>
}
