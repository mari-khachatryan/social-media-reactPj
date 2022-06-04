import { useState } from "react"
import classes from '../Profile/profile.module.css'
import GetInfo from "./ProfileInfo/getInfo"
import ProfileInfo from "./ProfileInfo/profileInfo"
import { OR } from "./ProfileData/profileIMG"
import ProfileIMG from "./ProfileChangePhoto/changePhoto"

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