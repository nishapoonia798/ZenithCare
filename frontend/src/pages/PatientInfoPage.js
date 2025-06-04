import React, { useState, useEffect } from 'react';
import './PatientInfoPage.css';
import { useNavigate } from 'react-router-dom';
import './Login.js';
// Assuming you have a CSS file for styling

const PatientInfoPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const [patientInfo, setPatientInfo] = useState({
    // Personal Information
    name: '',
    dateOfBirth: '',
    gender: '',
    contact: '',
    email: '',
    address: '',
    emergencyContact: '',
    emergencyRelation: '',

    // Medical Information
    bloodType: '',
    allergies: '',
    currentMedications: '',
    chronicConditions: '',

    // Insurance Information
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    primaryPhysician: ''
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};

    // Personal Information Validation
    if (!patientInfo.name) newErrors.name = 'Name is required';
    if (!patientInfo.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!patientInfo.contact) newErrors.contact = 'Contact number is required';
    if (!patientInfo.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(patientInfo.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Medical Information Validation
    if (!patientInfo.bloodType) newErrors.bloodType = 'Blood type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Patient Information Submitted Successfully');
      // Here you would typically make an API call to save the data
      console.log(patientInfo);
    } catch (error) {
      alert('An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderPersonalInfo = () => (
    <div className="form-section">
      <h3>Personal Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            name="dateOfBirth"
            value={patientInfo.dateOfBirth}
            onChange={handleChange}
            className={errors.dateOfBirth ? 'error' : ''}
          />
          {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={patientInfo.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Contact Number *</label>
          <input
            type="tel"
            name="contact"
            value={patientInfo.contact}
            onChange={handleChange}
            className={errors.contact ? 'error' : ''}
          />
          {errors.contact && <span className="error-message">{errors.contact}</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          value={patientInfo.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={patientInfo.address}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Emergency Contact</label>
          <input
            type="text"
            name="emergencyContact"
            value={patientInfo.emergencyContact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Relationship to Patient</label>
          <input
            type="text"
            name="emergencyRelation"
            value={patientInfo.emergencyRelation}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );

  const renderMedicalInfo = () => (
    <div className="form-section">
      <h3>Medical Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Blood Type *</label>
          <select
            name="bloodType"
            value={patientInfo.bloodType}
            onChange={handleChange}
            className={errors.bloodType ? 'error' : ''}
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors.bloodType && <span className="error-message">{errors.bloodType}</span>}
        </div>
      </div>

      <div className="form-group">
        <label>Allergies</label>
        <textarea
          name="allergies"
          value={patientInfo.allergies}
          onChange={handleChange}
          placeholder="List any allergies..."
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>Current Medications</label>
        <textarea
          name="currentMedications"
          value={patientInfo.currentMedications}
          onChange={handleChange}
          placeholder="List current medications..."
          rows="3"
        />
      </div>

      <div className="form-group">
        <label>Chronic Conditions</label>
        <textarea
          name="chronicConditions"
          value={patientInfo.chronicConditions}
          onChange={handleChange}
          placeholder="List any chronic conditions..."
          rows="3"
        />
      </div>
    </div>
  );

  const renderInsuranceInfo = () => (
    <div className="form-section">
      <h3>Insurance Information</h3>
      <div className="form-row">
        <div className="form-group">
          <label>Insurance Provider</label>
          <input
            type="text"
            name="insuranceProvider"
            value={patientInfo.insuranceProvider}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Policy Number</label>
          <input
            type="text"
            name="policyNumber"
            value={patientInfo.policyNumber}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Group Number</label>
          <input
            type="text"
            name="groupNumber"
            value={patientInfo.groupNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Primary Physician</label>
          <input
            type="text"
            name="primaryPhysician"
            value={patientInfo.primaryPhysician}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="patient-info-container">
      <div className="patient-info-card">
        <h2>Patient Information Form</h2>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal
          </button>
          <button
            className={`tab ${activeTab === 'medical' ? 'active' : ''}`}
            onClick={() => setActiveTab('medical')}
          >
            Medical
          </button>
          <button
            className={`tab ${activeTab === 'insurance' ? 'active' : ''}`}
            onClick={() => setActiveTab('insurance')}
          >
            Insurance
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="tab-content">
            {activeTab === 'personal' && renderPersonalInfo()}
            {activeTab === 'medical' && renderMedicalInfo()}
            {activeTab === 'insurance' && renderInsuranceInfo()}
          </div>

          <div className="form-footer">
            <button
              type="submit"
              className={`submit-button ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Information'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientInfoPage;
