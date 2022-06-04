import { memo, useEffect, useState } from "react"
import classes from '../Profile/profile.module.css'
import GetInfo from "./ProfileInfo/getInfo"
import { useDispatch } from "react-redux"
import { getPosts } from "./ReduxUser/thunks/thunk"
import { baseUrl } from "../../Api/Api"
import ProfileInfo from "./ProfileInfo/profileInfo"
import { OR } from "./ProfileData/profileIMG"
import ProfileIMG from "./ProfileChangePhoto/changePhoto"
import ProfileStatus from "./ProfileStatus/profileStatus"

const Profile = () => {
   const [edit, setEdit] = useState(false)
   const [Change, Unchange] = OR

   const show = () => {
      setEdit(!edit)
   }
   return (
      <div className={classes.profile}>
         <ProfileIMG />
         <div className={classes.container}>
            {!edit && <GetInfo />}
            {edit && <ProfileInfo />}
            <button onClick={show} className={classes.btnInfo}>{edit ? Unchange : Change} Information</button>
         </div>
      </div>
   )
}

export default Profile