import { useAuthTab } from "../../contexts/AuthTabProvider"
import { AUTH_TABS } from "../../helpers/constants"

const [LOGIN] = AUTH_TABS

const Register = () => {
const {setAuthRoute} = useAuthTab()

    return (
        <div>
            REGISTRATION in Our Social Media
            <button onClick={() => setAuthRoute(LOGIN)}>Go to Log in</button>
        </div>
    )
}

export default Register