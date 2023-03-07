import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/home"
import Register from "./page/register/signin"
import Login from "./page/Login/login"
import Product from "./page/product/product"
import About from "./page/about/about"
import Detail from "./page/detail/detail"
import Dashboard from "./page/dashboard/dashboard"
import Underconstruct from "./page/underconstruct/underconstruct"
import PrivateRoutes from "./helpers/privateroute"
import ForgetPassword from "./page/forget-password/forget-password"
import UpdatePassword from "./page/update-password/update-password"
import Cart from "./page/cart/cart"
import Manage from "./page/manage-product/manage"
import Checkout from "./page/checkout/checkout"
import Thanks from "./page/success/thanks"



function router() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />

        <Route element={<PrivateRoutes/>}>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/thanks" element={<Thanks/>} />
          <Route path="" element='' />
          <Route path="" element='' />
          <Route path="" element='' />
        </Route>

        <Route path="/testing" element={<Dashboard/>} />
        <Route path="/underconstruct" element={<Underconstruct/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/auth/update-password/:id" element={<UpdatePassword/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:slug" element={<Detail/>} />
        <Route path="/manage-product" element={<Manage/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="" element='' />
        <Route path="/checkout" element={<Checkout/>} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default router