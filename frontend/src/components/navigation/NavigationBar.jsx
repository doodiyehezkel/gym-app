import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useSignout } from "../../hooks/useSignout"
import './NavigationBar.css'
export default function NavigationBar() {

    const { user } = useAuthContext()
    const [signout, loading, error] = useSignout()

    return (
        <nav>
            <div className="logo">
                <NavLink to={'/'} > Workout Body </NavLink>
            </div>

            <div className="main-nav">
                {user
                    ?
                    <>
                        <button className="signout-btn" onClick={signout}>Signout</button>
                    </>
                    :
                    <>
                        <NavLink to={'/signin'} > Signin </NavLink>
                        <NavLink to={'/signup'} > Signup </NavLink>
                    </>
                }
            </div>
        </nav>
    )

}