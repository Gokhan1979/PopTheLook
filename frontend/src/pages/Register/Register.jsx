export default function Register(){
 const handle=async(e)=>{
  e.preventDefault();
  // Send email confirmation
  // backend/src/controllers/userController.js -> sendConfirmEmail()
  alert('Check your email! Confirmation sent');
 }
 return <div style={{maxWidth:400, margin:'50px auto'}}>
  <h1>Create your account</h1>
  <form onSubmit={handle}>
   <input placeholder="Email" type="email" required style={{width:'100%', padding:12, marginBottom:10}}/>
   <input placeholder="Password" type="password" required style={{width:'100%', padding:12, marginBottom:10}}/>
   <input placeholder="Confirm Password" type="password" required style={{width:'100%', padding:12, marginBottom:20}}/>
   <button style={{width:'100%', background:'black', color:'white', padding:14}}>CREATE ACCOUNT</button>
  </form>
 </div>
}
