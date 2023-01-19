import './App.css';
// import Navbar from './Page/Shared/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Home from './Page/Home/Home';
// import Appointment from './Page/Appointment/Appointment';
// import Review from './Page/Review/Review';
// import ContactUs from './Page/ContactUs/ContactUs';
// import About from './Page/About/About';
// import Login from './Page/Login/Login';
// import SignUp from './Page/Login/SignUp/SignUp';
// import Dashboard from './Page/Dashboard/Dashboard';
// import { Toaster } from 'react-hot-toast';
// import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';

import router from './Routes/Routes/Routes';

import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// import { Toaster } from 'react-hot-toast';

function App() {

  return (
    // <div className='max-w-[1440px] mx-auto' >
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>




    // <div className="App">
    //   {/* <Navbar></Navbar>
    //   <Routes>
    //     <Route path='/' element={<Home></Home>}></Route>
    //     <Route path='/about' element={<About></About>}></Route>
    //     <Route path='/appointment' element={
    //       <PrivateRoute>
    //         <Appointment></Appointment>
    //       </PrivateRoute>
    //     }></Route>
    //     <Route path='/reviews' element={<Review></Review>}></Route>
    //     <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
    //     <Route path='/login' element={<Login></Login>}></Route>
    //     <Route path='/signup' element={<SignUp></SignUp>}></Route>
    //     <Route path='/dashboard' element={
    //       <PrivateRoute>
    //         <Dashboard></Dashboard>
    //       </PrivateRoute>
        
    //     }></Route>
    //   </Routes> */}
      
    //   <RouterProvider router={router}></RouterProvider>
    //   <Toaster></Toaster>
    // </div>
  );
}

export default App;
