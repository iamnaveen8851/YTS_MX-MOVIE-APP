import { useContext } from "react"
import { AuthContext } from "../AuthContext/AuthContext"
import { Navigate } from "react-router-dom"
function PrivateRoute({children}){
    const {isLoggedIn, login} = useContext(AuthContext)
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to='/login'/>
    )
}

export default PrivateRoute