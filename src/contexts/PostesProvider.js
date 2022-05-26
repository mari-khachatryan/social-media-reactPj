import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { baseUrl } from "../Api/Api";

const PostesContext = createContext(null)

const PostesProvider = ({children}) => {
       
      const [postesData, setPostesData] = useState([])
        
       useEffect(() => {
          axios.get(`${baseUrl}/posts`)
          .then(res => setPostesData(res.data))
          .catch(err => console.log(err))
       },[])

       


    return <PostesContext.Provider value={{postesData, setPostesData}}>
        {children}
    </PostesContext.Provider>
}

export const usePostes = () => useContext(PostesContext)



export default PostesProvider