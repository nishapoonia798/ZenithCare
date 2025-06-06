import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientInfoPage from './pages/PatientInfoPage';
import Appointments from './pages/Appointments';
import Contact from './pages/Contact';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Hospitals from './components/Hospitals';
import Header from './components/Header.temp';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patient-info" element={<PatientInfoPage />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospitals/view-all" element={<Hospitals />} />
          <Route path="/hospitals/nearest" element={<Hospitals />} />
          <Route path="/hospitals/facilities" element={<Hospitals />} />
          <Route path="/hospitals/reviews" element={<Hospitals />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>

  );
}

export default App;

