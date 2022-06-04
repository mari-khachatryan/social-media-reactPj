import { useAuthTab } from "../../contexts/AuthTabProvider"
import { AUTH_TABS } from "../../helpers/constants"
import classes from "./Register.module.css"
import {Controller, useForm } from "react-hook-form"
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios"
import { baseUrl } from "../../Api/Api"
import { useState } from "react"


const [LOGIN] = AUTH_TABS

const Register = () => {

const [isRegSucceed, setIsRegSucceed] = useState(false)   
const {setAuthRoute} = useAuthTab()
const {register, handleSubmit, control, formState: {errors}} = useForm()
//const {reset, setValue, control } = useForm({ defaultValues })

const onSubmit = data => {
    if(data.password === data.repassword) {
      const user = {
          name: data.login, 
          password: data.password,
          gender: data.gender,
          age: data.age,
          //birthday: data.ReactDatepicker
        }
        axios.post(`${baseUrl}/users`, user)
        .then(() => {
            setIsRegSucceed(true)
            setTimeout(() => {
                setAuthRoute(LOGIN)
            },2000)
        })

    } else {
        console.log('password are not the same')
    }
     
}

    return (
        <div className={classes.conainer}>
           <p className={classes.p}> Create a new account </p>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                   login 
                   <div>
                        <input {...register('login', {
                            required: true,
                            minLength: 4
                        })} type='text'/>
                        <div className={classes.divLogin}>{errors?.login?.type && "short login"}</div>
                   </div>
                </label>
                <label className={classes.label}>
                 password
                   <div>
                        <input {...register('password', {
                            required: true,
                            minLength: 4,
                            pattern: "[A-Za-z0-9]+"
                            })} type='password'/>
                        <div className={classes.divLogin}>{errors?.password?.type === "pattern" && "unrelianle password"}</div>
                   </div>
                </label>
                <label className={classes.label}>
                 repassword 
                   <div>
                        <input {...register('repassword', {required: true})} type='password'/>
                        <div className={classes.divLogin}>{errors?.repassword?.type && "inconsistency"}</div>
                   </div>
                </label>
                <div className={classes.inputStyle}>
                <select {...register("gender")}>
                         <option value="female">female</option>
                         <option value="male">male</option>
                         <option value="other">other</option>
                </select>
                <label>age</label>
                <input {...register("age", { min: 18, max: 99 })} />
                           {errors.age && (
                           <p>You Must be older then 18 and younger then 99 years old</p>
                          )} 
                          </div>
                {/* <div className={classes.birthday}>
                      <section className={classes.birthday}>
                      <label>Birthday</label>
                          <Controller
                             {...register("ReactDatepicker")}
                             control={control}
                             name="ReactDatepicker"
                             render={({ field }) => (
                               <ReactDatePicker
                                 className="input"
                                 placeholderText="Select date"
                                 onChange={(e) => field.onChange(e)}
                                 selected={field.value}
                               />
                             )}      
                           />
                      </section>
                </div> */}
                
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={() => setAuthRoute(LOGIN)}>Already have an account?</button>
            {isRegSucceed && <p>Registration succeed</p>}
        </div>
    )
}

export default Register