import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { baseUrl } from "../../Api/Api"
import { useAuthTab } from "../../contexts/AuthTabProvider"
import { AUTH_TABS } from "../../helpers/constants"
import classes from "./Login.module.css"

console.log("classes", classes)

const [, REGISTRATION] = AUTH_TABS

const Login = () => {
    const [isLoginFailed, setIisLoginFailed] = useState(false)
    const {setAuthRoute} = useAuthTab()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()

    const onSubmit = data => {
         axios.get(`${baseUrl}/users`)
         .then(res => {
               const user = res.data.find(item => item.name === data.login && item.password === data.password)
         
               if(user) {
                   navigate('../posts')
               } else {
                   console.log("User is not found")
               }
       
            })
       
        console.log("data", data)
    }
   
    return (
        <div className={classes.conteiner}>
            Log into Our Soical Media
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                   LOG IN 
                   <div>
                        <input {...register('login', {required: true})} type='text'/>
                        <div className={classes.divLogin}>{errors?.login?.type && "No login"}</div>
                   </div>
                   
                </label>

                <label className={classes.label}>
                    PASSWORD
                    <input {...register('password', {required: true})} type='password'/>
                    <div className={classes.divPassword}>{errors?.password?.type && "No password"}</div>
                </label>
                
                
                <button type="submit">LOG IN</button>
            </form>
            {(isLoginFailed || (errors.login || errors.password)) &&
            <button onClick={() => setAuthRoute(REGISTRATION)}>Create New Account/go to register</button>}
        </div>
    )
}

export default Login