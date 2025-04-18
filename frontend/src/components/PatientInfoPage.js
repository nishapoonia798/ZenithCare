import React, { useState } from 'react';
import './PatientInfoPage.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 // Assuming you have a CSS file for styling

const PatientInfoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    contact: '',
    email: '',
    id: '',
    other: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({ ...patientInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Patient Information Submitted Successfully');
    console.log(patientInfo);
  };

  return (
    <div className="patient-info-container">
      <h1>Patient Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact: </label>
          <input
            type="text"
            name="contact"
            value={patientInfo.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={patientInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>ID: </label>
          <input
            type="text"
            name="id"
            value={patientInfo.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Other: </label>
          <textarea
            name="other"
            value={patientInfo.other}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="entered-details">
        <h2>Entered Details:</h2>
        <p><strong>Name:</strong> {patientInfo.name}</p>
        <p><strong>Contact:</strong> {patientInfo.contact}</p>
        <p><strong>Email:</strong> {patientInfo.email}</p>
        <p><strong>ID:</strong> {patientInfo.id}</p>
        <p><strong>Other:</strong> {patientInfo.other}</p>
      </div>
    </div>

  );
};

export default PatientInfoPage;
