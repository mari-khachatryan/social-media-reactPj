import { useRef } from "react";
import { useDispatch } from "react-redux";
import classes from '../profile.module.css'
import { setStatus } from '../ReduxUser/slices/userSlice'


const ProfileStatus = () => {

   const changeStatus = useRef()
   const dispatch = useDispatch()

   const hendleStatue = () => {
      dispatch(setStatus(changeStatus.current.value))
      changeStatus.current.value = ''
   }

   return (
      <div className={classes.profStatus}>
         <input type='text' ref={changeStatus} />
         <button onClick={hendleStatue}>Change status</button>
      </div >
   )
}
export default ProfileStatus