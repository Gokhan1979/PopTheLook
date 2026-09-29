import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Shop from '../pages/Shop/Shop.jsx'
import ProductDetails from '../pages/ProductDetails/ProductDetails.jsx'
import Cart from '../pages/Cart/Cart.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Profile from '../pages/Profile/Profile.jsx'
import Forgot from '../pages/Login/Forgot.jsx'
import Reset from '../pages/Login/Reset.jsx'
import Verify from '../pages/Login/Verify.jsx'

function ProtectedRoute({ children }){
  const token = localStorage.getItem('token');
  if(!token) return <Navigate to="/login" />;
  return children;
}

export default function AppRoutes(){
 return (
  <Routes>
   {/* PUBLIC */}
   <Route path="/" element={<Home/>} />
   <Route path="/shop" element={<Shop/>} />
   <Route path="/product/:id" element={<ProductDetails/>} />
   <Route path="/cart" element={<Cart/>} />

   {/* AUTH - Your flow */}
   <Route path="/login" element={<Login/>} />
   <Route path="/register" element={<Register/>} />
   <Route path="/verify" element={<Verify/>} /> {/* Email link lands here */}
   <Route path="/forgot" element={<Forgot/>} /> {/* Forgot password enter email */}
   <Route path="/reset-password" element={<Reset/>} /> {/* Reset link lands here */}

   {/* PROFILE - Opens immediately after email verification */}
   <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />

   {/* Catch all */}
   <Route path="*" element={<Navigate to="/" />} />
  </Routes>
 )
}
