import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/home"
import Underconstruct from "./page/underconstruct/underconstruct"



function router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/underconstruct" element={<Underconstruct/>} />
        <Route path="" element='' />
    </Routes>
    </BrowserRouter>
  )
}

export default router