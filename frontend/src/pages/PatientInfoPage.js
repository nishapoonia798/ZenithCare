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
  const [documents, setDocuments] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

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

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newDocuments = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: file.size,
      file
    }));

    setDocuments(prev => [...prev, ...newDocuments]);

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => setUploadProgress(0), 1000);
      }
    }, 200);
  };

  const removeDocument = (id) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
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

  const renderDocumentsSection = () => (
    <div className="form-section">
      <h3>Medical Documents</h3>
      <div className="document-upload-area">
        <label className="upload-label">
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            className="file-input"
          />
          <div className="upload-placeholder">
            <i className="upload-icon">📎</i>
            <span>Drop files here or click to upload</span>
            <small>Supported formats: PDF, JPG, PNG, DOC</small>
          </div>
        </label>

        {uploadProgress > 0 && (
          <div className="upload-progress">
            <div
              className="progress-bar"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        {documents.length > 0 && (
          <div className="documents-list">
            {documents.map(doc => (
              <div key={doc.id} className="document-item">
                <span className="document-icon">📄</span>
                <div className="document-info">
                  <span className="document-name">{doc.name}</span>
                  <span className="document-size">{formatFileSize(doc.size)}</span>
                </div>
                <button
                  className="remove-document"
                  onClick={() => removeDocument(doc.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderPreview = () => (
    <div className="preview-overlay" onClick={() => setShowPreview(false)}>
      <div className="preview-content" onClick={e => e.stopPropagation()}>
        <h3>Patient Information Summary</h3>

        <div className="preview-section">
          <h4>Personal Information</h4>
          <div className="preview-grid">
            <div className="preview-item">
              <label>Name:</label>
              <span>{patientInfo.name}</span>
            </div>
            <div className="preview-item">
              <label>Date of Birth:</label>
              <span>{patientInfo.dateOfBirth}</span>
            </div>
            <div className="preview-item">
              <label>Gender:</label>
              <span>{patientInfo.gender}</span>
            </div>
            <div className="preview-item">
              <label>Contact:</label>
              <span>{patientInfo.contact}</span>
            </div>
            <div className="preview-item">
              <label>Email:</label>
              <span>{patientInfo.email}</span>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h4>Medical Information</h4>
          <div className="preview-grid">
            <div className="preview-item">
              <label>Blood Type:</label>
              <span>{patientInfo.bloodType}</span>
            </div>
            <div className="preview-item">
              <label>Allergies:</label>
              <span>{patientInfo.allergies || 'None'}</span>
            </div>
            <div className="preview-item">
              <label>Current Medications:</label>
              <span>{patientInfo.currentMedications || 'None'}</span>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h4>Insurance Information</h4>
          <div className="preview-grid">
            <div className="preview-item">
              <label>Provider:</label>
              <span>{patientInfo.insuranceProvider}</span>
            </div>
            <div className="preview-item">
              <label>Policy Number:</label>
              <span>{patientInfo.policyNumber}</span>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h4>Uploaded Documents ({documents.length})</h4>
          <div className="preview-documents">
            {documents.map(doc => (
              <div key={doc.id} className="preview-document">
                <span className="document-icon">📄</span>
                <span>{doc.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="preview-actions">
          <button className="secondary-button" onClick={() => setShowPreview(false)}>
            Close
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Confirm & Submit
          </button>
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
          <button
            className={`tab ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setShowPreview(true); }}>
          <div className="tab-content">
            {activeTab === 'personal' && renderPersonalInfo()}
            {activeTab === 'medical' && renderMedicalInfo()}
            {activeTab === 'insurance' && renderInsuranceInfo()}
            {activeTab === 'documents' && renderDocumentsSection()}
          </div>

          <div className="form-footer">
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              Review Information
            </button>
          </div>
        </form>
      </div>

      {showPreview && renderPreview()}
    </div>
  );
};

export default PatientInfoPage;
