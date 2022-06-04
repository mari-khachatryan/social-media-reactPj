import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../../Api/Api";
import { GENDER } from "../ProfileData/profileIMG";
import { useState } from "react";
import classes from '../profile.module.css'
import dayjs from "dayjs";

const { MALE, FEMALE } = GENDER

const ProfileIMG = () => {

   const [photo, setPhoto] = useState(null)
   const userName = useSelector(state => state.user.userLogout)
   const user = useSelector(state => state.user.userName)
   const status = useSelector(state => state.user.userStatus)
   const date = Date.now()
   const dateJs = dayjs(date).format('YYYY')

   const profPhoto = user.gender === 'female' ? FEMALE : MALE
   const photoProfile = (e) => {

      if (e.target.files.length) {
         const file = e.target.files[0];
         const reader = new FileReader();
         reader.onload = (x) => {
            setPhoto(x.target.result)
            axios.patch(`${baseUrl}/users/${user.id}`, { "url": x.target.result })
         }
         reader.readAsDataURL(file)
      }
   }

   return (
      <div className={classes.profPhoto}>
         <div className={classes.profName}>
            <img className={classes.photo} src={photo || user.url || profPhoto} />
            <input type='file' id='file' onChange={photoProfile} className={classes.filePhoto} />
            <label for='file'><span>Avatar</span></label>
            <div className={classes.avInfo}>
               {user.Name ? <span>{user.Name}</span> :
                  <span>{user.name}</span>}
               {user.lastName && <span>{user.lastName}</span>}
               {user.birthday && <span>{+dateJs - +user.birthday} years</span>}
            </div>
         </div>
         <p className={classes.status}>{user.status || status}</p>

      </div>
   )
}
export default ProfileIMG



