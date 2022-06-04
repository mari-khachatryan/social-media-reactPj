import dayjs from "dayjs"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import classes from '../profile.module.css'
import axios from "axios"
import { baseUrl } from "../../../Api/Api"
import setInfo from '../ReduxUser/slices/userSlice'
import ProfileStatus from "../ProfileStatus/profileStatus"

const ProfileInfo = () => {

   const status = useSelector(state => state.user.userStatus)
   const date = Date.now()
   const dateJs = dayjs(date).format('YYYY')
   const Name = useSelector(state => state.user.userName)
   const dispatch = useDispatch()
   const { register, handleSubmit, formState: { errors } } = useForm()

   const url = useSelector(state => state.user.userPhoto)
   const user = useSelector(state => state.user.userName)
   const userStatus = useSelector(state => state.user.userStatus)

   const onSubmit = (data) => {
      data.status = userStatus
      axios.patch(`${baseUrl}/users/${user.id}`, data)
      dispatch(setInfo(data))
   }

   return (
      <div className={classes.profInfo}>

         <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>

            <div className={classes.contInfo}>
               <h4>Contact information</h4>

               <label className={classes.label}> E-Mail
                  <input {...register('mail', { required: false })} type='text' defaultValue={user.mail} />
               </label>
               <label className={classes.label}> Phone
                  <input {...register('phone', { required: false })} type='text' defaultValue={user.phone} />
               </label>
               <label className={classes.label}> Viber
                  <input {...register('viber', { required: false })} type='text' defaultValue={user.viber} />
               </label>
               <label className={classes.label}> WhatsApp
                  <input {...register('whatsApp', { required: false })} type='text' defaultValue={user.whatsApp} />
               </label>
            </div>

            <div className={classes.genData}>
               <h4>General data</h4>

               <label className={classes.label}> Name
                  <input {...register('Name', { required: false })} type='text' defaultValue={user.Name} />
               </label>
               <label className={classes.label}> Last name
                  <input {...register('lastName', { required: false })} type='text' defaultValue={user.lastName} />
               </label>
               <label className={classes.label}> Year
                  <input {...register('birthday', { required: false })} type='text' defaultValue={user.birthday} />
               </label>
               <label className={classes.label}> Gender
                  <input {...register('gender', { required: false })} type='text' defaultValue={user.gender} />
               </label>
               <label className={classes.label}>Place of work
                  <input {...register('work', { required: false })} type='text' defaultValue={user.work} />
               </label>
               <label className={classes.label}> Hobbies
                  <input {...register('hobbies', { required: false })} type='text' defaultValue={user.hobbies} />
               </label>
               <ProfileStatus />
            </div>
            <button type="submit" className={classes.btnSave}> Save Information </button>
         </form>

      </div>
   )
}
export default ProfileInfo