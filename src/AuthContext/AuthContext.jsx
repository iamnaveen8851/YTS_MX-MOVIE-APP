import { createContext, useState } from "react"

export const AuthContext = createContext()
function AuthContextProvider({children}){
const [isLoggedIn, setIsLoggedIn] = useState(false)

const login= ()=> {
    setIsLoggedIn(true)
}
    return(
        <AuthContext.Provider value={{isLoggedIn, login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;