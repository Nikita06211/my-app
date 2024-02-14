import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './Pages/Home';
import { AboutUs } from './Pages/About Us';
import { Calculator } from './Pages/Calculator';
import NavBar from './Components/Navbar';
import { Login } from './Pages/login';
import { Signup } from './Pages/signup';
import Dashboard from './Pages/Dashboard';
import { useEffect } from 'react';
import { Profile } from './Pages/Profile/profile';
import { Challenges } from './Pages/Challenges/challenge';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/challenge' element={<Challenges />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
