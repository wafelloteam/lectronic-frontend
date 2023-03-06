import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/home"
import Register from "./page/register/signin"
import Login from "./page/Login/login"
import Product from "./page/product/product"
import About from "./page/about/about"
import Detail from "./page/detail/detail"
import Underconstruct from "./page/underconstruct/underconstruct"
import PrivateRoutes from "./helpers/privateroute"



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
        <Route path="/about" element={<About/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="" element='' />
    </Routes>
    </BrowserRouter>
  )
}

export default router