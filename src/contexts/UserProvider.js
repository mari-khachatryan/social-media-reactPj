import { createContext, useContext, useState } from "react"

const UserContext = createContext(null) 


const UserProvider = ({children}) => {
    console.log('user provider user', localStorage.getItem('user') || sessionStorage.getItem('user'))
    const [user, setUser] = useState(localStorage.getItem('user') || sessionStorage.getItem('user') || null)

    return  <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

 export const useUserInfo = () => useContext(UserContext)

export default UserProvider