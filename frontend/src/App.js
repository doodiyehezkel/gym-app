import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import WorkoutsPage from './pages/WorkoutsPage'
import NotFoundPage from './pages/NotFoundPage'
import ErrorPage from './pages/ErrorPage'
import RootLayout from './layout/RootLayout'

import { useAuthContext } from "./hooks/useAuthContext";
import TraineesPage from "./pages/TraineesPage";

function App() {

  const { user } = useAuthContext()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={user ? <WorkoutsPage /> : <Navigate to={'signin'} />} errorElement={<ErrorPage />} />
        <Route path="trainees" element={user ? <TraineesPage /> : <Navigate to={'signin'} />} errorElement={<ErrorPage />} />
        <Route path="signin" element={!user ? <SigninPage /> : <Navigate to={'/'} />} errorElement={<ErrorPage />} />
        <Route path="signup" element={!user ? <SignupPage /> : <Navigate to={'/'} />} errorElement={<ErrorPage />} />
        <Route path='*' element={user ? <NotFoundPage /> : <Navigate to={'signin'} />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
