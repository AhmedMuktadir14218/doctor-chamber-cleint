import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import Appointment from "../../Page/Appointment/Appointment";

import Login from "../../Page/Login/Login";
import SignUp from "../../Page/Login/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../../Page/Home/Home";
// import ContactUs from "../../Page/ContactUs/ContactUs";
// import Review from "../../Page/Review/Review";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Page/Dashboard/MyAppointment/MyAppointment";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllUsers from "../../Page/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../../Page/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Page/Dashboard/ManageDoctors/ManageDoctors";
import About from "../../Page/About/About";
import ContactUs from "../../Page/ContactUs/ContactUs";
import Review from "../../Page/Home/Testimonial/Review";
import Payment from "../../Page/Dashboard/Payment/Payment";
import DisplayError from "../../Page/Shared/DisplayError/DisplayError";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/about',
                element: <About></About>
            },

            {
                path: '/reviews',
                element: <Review></Review>
            },

            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
//         ]
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
           
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment> ,
                loader:({params})=>fetch(`https://doctor-chamber-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default router;












// const router = createBrowserRouter([
//     {
//         path: '/login',
//         element: <Login></Login>
//     },
//     {
//         path: '/signup',
//         element: <SignUp></SignUp>
//     },
//     {
//         path: '/',
//         element: <Main></Main>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home></Home>
//             },
//             // {
//             //     path: '/login',
//             //     element: <Login></Login>
//             // },
//             {
//                 path: '/contactus',
//                 element: <ContactUs></ContactUs>
//             },
//             // {
//             //     path: '/about',
//             //     element: <About></About>
//             // },

//             {
//                 path: '/reviews',
//                 element: <Review></Review>
//             },

//             {
//                 path: '/appointment',
//                 element: <Appointment></Appointment>
//             }
//         ]
//     },
//     {
//         path: '/dashboard',
//         element: <PrivateRoute>
//             <DashboardLayout></DashboardLayout>
//         </PrivateRoute>,
//         children:
//             [
//                 {
//                     path: '/dashboard',
//                     element: <MyAppointment></MyAppointment>
//                 }
//             ]
//     }
// ])

// export default router;