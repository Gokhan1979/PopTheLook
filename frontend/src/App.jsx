import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/index.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

export default function App(){
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
