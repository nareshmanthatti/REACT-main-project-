import React from 'react'
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './PAGES/Home';
import Galery from './Galery';
import About from './About';
import Contact from './Contact';
import AdminRegister from './AdminRegister';
import ProtectedRoute from './navbar/ProtectedRoute';
import PublicRoute from './navbar/PublicRoute';
import AdminDashboard from './AdminDashboard';
import AcademyManagerRegister from './AcademyManagerRegister';

const App = () => {
  return (
  <Router>     
    <Routes>
      
    <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path='/adminregister' element={<AdminRegister/>} />
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/galery' element={<Galery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}>
        <Route path='acadmymanagerregister' element={<AcademyManagerRegister/>}/></Route>
        
    </Routes>
  </Router>
  )
}

export default App