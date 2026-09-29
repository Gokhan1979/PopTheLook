import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Checkout from './pages/Checkout/Checkout'
import Profile from './pages/Profile/Profile'
import Wishlist from './pages/Wishlist/Wishlist'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Orders from './pages/Orders/Orders'
import { CartProvider } from './context/CartContext'

function App(){
  return(
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main style={{minHeight:'80vh',background:'#fafafa'}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/orders" element={<Orders/>} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}
export default App
