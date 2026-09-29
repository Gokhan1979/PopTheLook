import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import AppRoutes from './routes/index.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

export default function App(){
 return <AuthProvider>
  <Navbar/>
  <AppRoutes/>
  <Footer/>
 </AuthProvider>
}
