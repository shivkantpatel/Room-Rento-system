import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home.jsx';
import Err from './err.jsx';
import UserSignIn from './component/User_Auth/userSignIn.jsx';
import UserSignUp from './component/User_Auth/UserSignUp.jsx';
import MainCintainerVedion from './MainCintainerVedion.jsx';
import ForgetPassword from './component/User_Auth/ForgetPassword.jsx';
import ProtectedRoute from './storage/protectRoute.jsx';
import Profile from './home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Err />,
    children: [
      
      { path: '/', element: <MainCintainerVedion/> },      // 
      { path: 'Sign-Up', element: <UserSignUp/> },      // /Sign-up
      { path: 'Sign-IN', element: <UserSignIn /> },       // /Sign-IN
      { path: 'Forget-Password', element: <ForgetPassword /> },       // /Sign-IN
      {path:'profile', element :<ProtectedRoute><Profile/></ProtectedRoute>}
    
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
