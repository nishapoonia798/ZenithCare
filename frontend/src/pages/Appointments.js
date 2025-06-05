import React, { useState } from 'react';
import './Appointments.css';

const Appointments = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    speciality: '',
    hospital: '',
    doctor: '',
    date: '',
    time: '',
    patientName: '',
    patientAge: '',
    patientGender: '',
    contactNumber: '',
    email: '',
    description: ''
  });

  // Sample data (In real app, this would come from an API)
  const hospitals = [
    { id: 1, name: 'ZenithCare Main Hospital', location: 'Downtown Medical District' },
    { id: 2, name: 'ZenithCare North Branch', location: 'North City' },
    { id: 3, name: 'ZenithCare South Center', location: 'South City' }
  ];

  const specialities = [
    { id: 1, name: 'Cardiology' },
    { id: 2, name: 'Neurology' },
    { id: 3, name: 'Orthopedics' },
    { id: 4, name: 'Pediatrics' },
    { id: 5, name: 'Dermatology' },
    { id: 6, name: 'Ophthalmology' }
  ];

  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', speciality: 'Cardiology', hospital: 1 },
    { id: 2, name: 'Dr. Michael Chen', speciality: 'Neurology', hospital: 1 },
    { id: 3, name: 'Dr. Emily Rodriguez', speciality: 'Orthopedics', hospital: 2 },
    { id: 4, name: 'Dr. James Wilson', speciality: 'Pediatrics', hospital: 3 }
  ];

  // Generate available time slots for the selected date
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Appointment Data:', formData);
    // Show success message and reset form
    alert('Appointment booked successfully!');
    setStep(1);
    setFormData({
      speciality: '',
      hospital: '',
      doctor: '',
      date: '',
      time: '',
      patientName: '',
      patientAge: '',
      patientGender: '',
      contactNumber: '',
      email: '',
      description: ''
    });
  };

  return (
    <div className="appointments-page">
      <div className="appointment-container">
        <div className="appointment-header">
          <h1>Book an Appointment</h1>
          <div className="steps-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Select Specialty</div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Choose Hospital</div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Select Doctor</div>
            <div className={`step ${step >= 4 ? 'active' : ''}`}>4. Pick Time</div>
            <div className={`step ${step >= 5 ? 'active' : ''}`}>5. Patient Details</div>
          </div>
        </div>

        <div className="appointment-form">
          {step === 1 && (
            <div className="form-step">
              <h2>Select Specialty</h2>
              <div className="specialities-grid">
                {specialities.map(specialty => (
                  <div
                    key={specialty.id}
                    className={`specialty-card ${formData.speciality === specialty.name ? 'selected' : ''}`}
                    onClick={() => handleInputChange({ target: { name: 'speciality', value: specialty.name } })}
                  >
                    <h3>{specialty.name}</h3>
                  </div>
                ))}
              </div>
              <div className="form-navigation">
                <button className="next-btn" onClick={handleNext} disabled={!formData.speciality}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h2>Choose Hospital</h2>
              <div className="hospitals-grid">
                {hospitals.map(hospital => (
                  <div
                    key={hospital.id}
                    className={`hospital-card ${formData.hospital === hospital.id ? 'selected' : ''}`}
                    onClick={() => handleInputChange({ target: { name: 'hospital', value: hospital.id } })}
                  >
                    <h3>{hospital.name}</h3>
                    <p>{hospital.location}</p>
                  </div>
                ))}
              </div>
              <div className="form-navigation">
                <button className="back-btn" onClick={handleBack}>Back</button>
                <button className="next-btn" onClick={handleNext} disabled={!formData.hospital}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <h2>Select Doctor</h2>
              <div className="doctors-grid">
                {doctors
                  .filter(doctor =>
                    doctor.speciality === formData.speciality &&
                    doctor.hospital === formData.hospital
                  )
                  .map(doctor => (
                    <div
                      key={doctor.id}
                      className={`doctor-card ${formData.doctor === doctor.id ? 'selected' : ''}`}
                      onClick={() => handleInputChange({ target: { name: 'doctor', value: doctor.id } })}
                    >
                      <h3>{doctor.name}</h3>
                      <p>{doctor.speciality}</p>
                    </div>
                  ))}
              </div>
              <div className="form-navigation">
                <button className="back-btn" onClick={handleBack}>Back</button>
                <button className="next-btn" onClick={handleNext} disabled={!formData.doctor}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="form-step">
              <h2>Pick Date & Time</h2>
              <div className="datetime-selection">
                <div className="date-picker">
                  <label>Select Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="time-slots">
                  <label>Available Time Slots</label>
                  <div className="slots-grid">
                    {generateTimeSlots().map(time => (
                      <button
                        key={time}
                        className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                        onClick={() => handleInputChange({ target: { name: 'time', value: time } })}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-navigation">
                <button className="back-btn" onClick={handleBack}>Back</button>
                <button className="next-btn" onClick={handleNext} disabled={!formData.date || !formData.time}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="form-step">
              <h2>Patient Details</h2>
              <form onSubmit={handleSubmit} className="patient-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      name="patientAge"
                      value={formData.patientAge}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      name="patientGender"
                      value={formData.patientGender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description of Problem (Optional)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                  />
                </div>
                <div className="form-navigation">
                  <button type="button" className="back-btn" onClick={handleBack}>
                    Back
                  </button>
                  <button type="submit" className="submit-btn">
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
