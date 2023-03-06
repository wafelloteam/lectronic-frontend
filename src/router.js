import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/home"
import Register from "./page/register/signin"
import Login from "./page/Login/login"
import Product from "./page/product/product"
import About from "./page/about/about"
import Detail from "./page/detail/detail"
import Underconstruct from "./page/underconstruct/underconstruct"
import PrivateRoutes from "./helpers/privateroute"
import ForgetPassword from "./page/forget-password/forget-password"
import UpdatePassword from "./page/update-password/update-password"
import Cart from "./page/cart/cart"



function router() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />

        <Route element={<PrivateRoutes/>}>
        <Route path="" element='' />
        <Route path="" element='' />
        <Route path="" element='' />
        </Route>

        
        <Route path="/underconstruct" element={<Underconstruct/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/auth/update-password/:id" element={<UpdatePassword/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:slug" element={<Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="" element='' />
        
    </Routes>
    </BrowserRouter>
  )
}

export default router