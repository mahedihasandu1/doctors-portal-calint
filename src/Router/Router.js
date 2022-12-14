import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/DashBoard/DashBoard/AddADoctor/AddDoctor";
import AllUsers from "../Pages/DashBoard/DashBoard/AllUsers/AllUsers";
import ManageDoctors from "../Pages/DashBoard/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointMent from "../Pages/DashBoard/DashBoard/MyAppointMent/MyAppointMent";
import Payment from "../Pages/DashBoard/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import DashBoardLayOut from "../Pages/Layout/DashBoardLayOut";
import Main from "../Pages/Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement:<DisplayError></DisplayError>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <SignUp></SignUp> },
            { path: '/appointment', element: <Appointment></Appointment> },
           
        ],
        
    },
    { path: '/dashboard',errorElement:<DisplayError></DisplayError>, element: <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,children:[
        {path:'/dashboard',element:<MyAppointMent></MyAppointMent>},
        {path:'/dashboard/allUsers',element:<AdminRoute><AllUsers></AllUsers></AdminRoute>},
        {path:'/dashboard/addDoctor',element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>},
        {path:'/dashboard/manageDoctors',element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>},
        {path:'/dashboard/payment/:id',element:<Payment></Payment>,loader:({params})=>fetch(`https://doctors-portal-server-nine-cyan.vercel.app/bookings/${params.id}`)},
    ] },
])

export default router;