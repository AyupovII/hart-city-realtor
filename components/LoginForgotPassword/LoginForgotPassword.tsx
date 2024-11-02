import { useState } from "react"
import Authorization from "../Authorization/Authorization"
import PasswordRecovery from "../PasswordRecovery/PasswordRecovery"

const LoginForgotPassword: React.FC = () => {
    const [isForgotPassword, setIsForgotPassword] = useState(false)
    return (
        !isForgotPassword ?
            <Authorization setIsForgotPassword={setIsForgotPassword} />
            :
            <PasswordRecovery />

    )
}

export default LoginForgotPassword