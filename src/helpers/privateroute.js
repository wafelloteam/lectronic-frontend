import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function PrivateRoutes() {
    const {isAuth} = useSelector((state) => state.user)

    return(
        isAuth ? <Outlet/> : <Navigate to='/login' />
    )
    
}

export default PrivateRoutes