import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Appointment from './Page/Appointment/Appointment';
import Review from './Page/Review/Review';
import ContactUs from './Page/ContactUs/ContactUs';
import About from './Page/About/About';
import Login from './Page/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
