import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/home"
import Register from "./page/register/signin"
import Login from "./page/Login/login"
import Product from "./page/product/product"
import Underconstruct from "./page/underconstruct/underconstruct"



function router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/underconstruct" element={<Underconstruct/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="" element='' />
        <Route path="" element='' />
        <Route path="" element='' />
    </Routes>
    </BrowserRouter>
  )
}

export default router