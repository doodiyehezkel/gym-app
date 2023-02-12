import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) throw Error(`use auth context must be used inside an AuthContextProvider component`)

    return context
}