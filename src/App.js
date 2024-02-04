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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
