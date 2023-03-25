import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import SigninPage from './pages/authentication/SigninPage'
import TraineeSigninPage from './pages/authentication/TraineeSigninPage'
import CoachSigninPage from './pages/authentication/CoachSigninPage'
import CoachSignupPage from './pages/authentication/CoachSignupPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorPage from './pages/ErrorPage'
import RootLayout from './layout/RootLayout'

import Loader from "./layout/Loader";

import { useAuthContext } from "./hooks/useAuthContext";
import TraineeWorkoutPage from "./pages/TraineeWorkoutPage";

function App() {

  const { user, loading } = useAuthContext()

  return (
    <>
      {loading
        ?
        <Loader />
        :
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={user ? <DashboardPage /> : <Navigate to={'signin'} />} errorElement={<ErrorPage />} />
            <Route path=":userId" element={user ? <TraineeWorkoutPage /> : <Navigate to={'signin'} />} />
            <Route path="signin" element={!user ? <SigninPage /> : <Navigate to={'/'} />}>
              <Route index element={<Navigate to={'coach'} />} />
              <Route path="coach" element={<CoachSigninPage />} />
              <Route path="trainee" element={<TraineeSigninPage />} />
            </Route>
            <Route path="signup" element={!user ? <CoachSignupPage /> : <Navigate to={'/'} />} errorElement={<ErrorPage />} />
            <Route path='*' element={user ? <NotFoundPage /> : <Navigate to={'signin'} />} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
