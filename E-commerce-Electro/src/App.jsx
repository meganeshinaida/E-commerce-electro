// import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Header from "./components/Header"
import Categories from "./Categories"
import AboutUs from "./pages/AboutUs"
import Blog from "./pages/Blog"
import Footer from "./components/Footer"
import PlaceOrder from "./pages/PlaceOrder"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Orders from "./pages/Orders"
import Login from "./pages/Login"
const App = () => {
  return (
    <div className="">
      <ToastContainer/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/collection" element={<Collection/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
       <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
