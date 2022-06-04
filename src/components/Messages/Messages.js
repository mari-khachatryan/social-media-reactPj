import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { messageDataSelector } from "../Profile/ReduxUser/slices/messagerSlice"
import { userSelector } from "../Profile/ReduxUser/slices/userSlice"
import { axiosDeleteThunk } from "../Profile/ReduxUser/thunks/axiosDeleteThunk"
import { axiosGetThunk } from "../Profile/ReduxUser/thunks/axiosGetThunk"
import PostCreator from "../PostCreator/PostCreator"
import classes from "./messages.module.css"

const Messages = () => {
  const user = useSelector(userSelector)
  const messageData = useSelector(messageDataSelector)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(axiosGetThunk())
  }, [])

  return (
    <main>
      {
         user && <PostCreator />
      }
      
      {messageData.map(({id, author, date, text}) => {
        console.log(id, author, date, text)
        return (
          <div key={id} className={classes.messageItem}>
            <p>{author}</p>
            <p>{date}</p>
            <p>{text}</p>
            <p>{id}</p>
            {
              user === author && <button onClick={() => dispatch(axiosDeleteThunk({id}))}>delete</button>
            }
          </div>
        )
      })}
    </main>
  )
}

export default Messages