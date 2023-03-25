
import { useAuthContext } from '../hooks/useAuthContext'
import CoachDashboardPage from './CoachDashboardPage'
import TraineeDashboardPage from './TraineeDashboardPage'

import './DashboardPage.css'
export default function DashboardPage() {

    const { user } = useAuthContext()

    return (
        <>
            {user.role === 'coach' && <CoachDashboardPage />}
            {user.role === 'trainee' && <TraineeDashboardPage />}
        </>
    )
}
