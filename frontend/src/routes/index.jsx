import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Shop from '../pages/Shop/Shop.jsx'
import ProductDetails from '../pages/ProductDetails/ProductDetails.jsx'
import Cart from '../pages/Cart/Cart.jsx'
import Login from '../pages/Login/Login.jsx'
import Register from '../pages/Register/Register.jsx'
import Profile from '../pages/Profile/Profile.jsx'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword.jsx'
import ResetPassword from '../pages/ResetPassword/ResetPassword.jsx'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  )
}
