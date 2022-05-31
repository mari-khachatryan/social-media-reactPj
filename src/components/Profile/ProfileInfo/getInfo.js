import { useMemo } from "react"
import { useSelector } from "react-redux"
import classes from '../profile.module.css'

const GetInfo = () => {
   const userName = useSelector(state => state.user.userName)

   return (
      <div className={classes.getInfo}>
         <div>
            <h4>Contact information</h4>
            {userName.mail && <p>E-Mail : {userName.mail}</p>}
            {userName.phone && <p>Phone : {userName.phone}</p>}
            {userName.viber && <p>Viber : {userName.viber}</p>}
            {userName.whatsApp && <p>WhatsApp : {userName.whatsApp}</p>}
         </div>
         <div>
            <h4>General data</h4>
            {userName.Name && <p>Name : {userName.Name}</p>}
            {userName.lastName && <p>Last name : {userName.lastName}</p>}
            {userName.year && <p>Year : {userName.year}</p>}
            {userName.gender && <p>Gender : {userName.gender}</p>}
            {userName.work && <p>Place of work : {userName.work}</p>}
            {userName.hobbies && <p>Hobbies : {userName.hobbies}</p>}

         </div>
      </div>
   )
}
export default GetInfo


