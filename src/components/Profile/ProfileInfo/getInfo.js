import { useSelector } from "react-redux"
import classes from '../profile.module.css'

const GetInfo = () => {

   const user = useSelector(state => state.user.userName)

   return (
      <div>
         <div className={classes.useName}>
            <span>{user?.Name}</span>
            <span>{user?.lastName}</span>
         </div>

         <div className={classes.getInfo}>
            <div>
               <h4>Contact information</h4>
               {user.mail && <p>E-Mail : {user.mail}</p>}
               {user.phone && <p>Phone : {user.phone}</p>}
               {user.viber && <p>Viber : {user.viber}</p>}
               {user.whatsApp && <p>WhatsApp : {user.whatsApp}</p>}
            </div>
            <div>
               <h4>General data</h4>
               {user.Name && <p>Name : {user.Name}</p>}
               {user.lastName && <p>Last name : {user.lastName}</p>}
               {user.year && <p>Year : {user.year}</p>}
               {user.gender && <p>Gender : {user.gender}</p>}
               {user.work && <p>Place of work : {user.work}</p>}
               {user.hobbies && <p>Hobbies : {user.hobbies}</p>}

            </div>
         </div>
      </div>
   )
}
export default GetInfo


