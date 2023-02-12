import { Outlet } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"
import './RootLayout.css'
export default function RootLayout () {
    return (
        <>
            <header>
                <NavigationBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
}