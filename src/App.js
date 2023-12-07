import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Booking from './Pages/Booking';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Admin from './Pages/Admin';
import Landing from './Pages/Landing';
import AdminUpdateRooms from './components/Admin/AdminUpdateRooms';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/book/:roomId/:fromDate/:toDate' element={<Booking />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/update-room-details/:id' element={<AdminUpdateRooms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
