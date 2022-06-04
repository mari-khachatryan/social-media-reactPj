import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { baseUrl } from "../../Api/Api"
import { useAuthTab } from "../../contexts/AuthTabProvider"
import { useUserInfo } from "../../contexts/UserProvider"
import { AUTH_TABS } from "../../helpers/constants"
import { setUserName } from "../Profile/ReduxUser/slices/userSlice"
import classes from "./Login.module.css"


const [, REGISTRATION] = AUTH_TABS

const Login = () => {
    const [isLoginFailed, setIsLoginFailed] = useState(false)
    const { setAuthRoute } = useAuthTab()
    const { setUser } = useUserInfo()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = data => {
        axios.get(`${baseUrl}/users`)
            .then(res => {
                const user = res.data.find(item => item.name === data.login && item.password === data.password)

                if (user) {
                    console.log('data', data)
                    dispatch(setUserName(user))
                    if (data.save) {
                        localStorage.setItem('user', data.login)
                    } else {
                        sessionStorage.setItem('user', data.login)
                    }
                    setUser(data.login)
                    navigate('/posts')
                } else {
                    setIsLoginFailed(true)
                    console.log("User is not found")
                }
            })
    }

    return (
        <div className={classes.conteiner}>
            Log into Our Soical Media
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                   LOG IN 
                   <div>
                        <input {...register('login', {required: true})} placeholder="login" type='text'/>
                        <div className={classes.divLogin}>{errors?.login?.type && "No login"}</div>
                    </div>

                </label>
                <label className={classes.label}>
                    PASSWORD
                    <input {...register('password', {required: true})} placeholder="password" type='password'/>
                    <div className={classes.divPassword}>{errors?.password?.type && "No password"}</div>
                </label>

                <label className={classes.rememberMe}>
                    <input type="checkbox" {...register('save')} />
                    Remember me
                </label>
                <button type="submit">LOG IN</button>
            </form>

            {(isLoginFailed || (errors.login || errors.password)) &&
                <button onClick={() => setAuthRoute(REGISTRATION)}>Create New Account/go to register</button>}
        </div>
    )
}

export default Login