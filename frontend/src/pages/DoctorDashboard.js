import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('appointments');
    const [isLoading, setIsLoading] = useState(true);

    // Sample data - replace with API calls in production
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            patientName: 'John Doe',
            date: '2024-03-20',
            time: '10:00 AM',
            status: 'upcoming',
            type: 'Regular Checkup',
            notes: 'Follow-up on previous treatment'
        },
        {
            id: 2,
            patientName: 'Jane Smith',
            date: '2024-03-20',
            time: '11:30 AM',
            status: 'confirmed',
            type: 'New Patient',
            notes: 'Initial consultation'
        }
    ]);

    const [patients, setPatients] = useState([
        {
            id: 1,
            name: 'John Doe',
            age: 45,
            lastVisit: '2024-02-15',
            condition: 'Hypertension',
            status: 'Stable'
        },
        {
            id: 2,
            name: 'Jane Smith',
            age: 32,
            lastVisit: '2024-03-10',
            condition: 'Diabetes Type 2',
            status: 'Under Observation'
        }
    ]);

    useEffect(() => {
        // Check authentication
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const userRole = localStorage.getItem('userRole');

        if (!isLoggedIn || userRole !== 'doctor') {
            navigate('/login');
            return;
        }

        // Simulate loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [navigate]);

    const handleAppointmentAction = (appointmentId, action) => {
        setAppointments(prevAppointments =>
            prevAppointments.map(apt =>
                apt.id === appointmentId
                    ? { ...apt, status: action }
                    : apt
            )
        );
    };

    const handlePatientClick = (patientId) => {
        // Navigate to patient details page
        navigate(`/patient/${patientId}`);
    };

    const renderAppointments = () => (
        <div className="dashboard-section">
            <div className="section-header">
                <h3>Today's Appointments</h3>
                <button className="add-button">+ New Appointment</button>
            </div>
            <div className="appointments-list">
                {appointments.map(appointment => (
                    <div key={appointment.id} className={`appointment-card ${appointment.status}`}>
                        <div className="appointment-header">
                            <h4>{appointment.patientName}</h4>
                            <span className={`status-badge ${appointment.status}`}>
                                {appointment.status}
                            </span>
                        </div>
                        <div className="appointment-details">
                            <div className="detail-item">
                                <span className="label">Date:</span>
                                <span>{appointment.date}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Time:</span>
                                <span>{appointment.time}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Type:</span>
                                <span>{appointment.type}</span>
                            </div>
                        </div>
                        <div className="appointment-notes">
                            <p>{appointment.notes}</p>
                        </div>
                        <div className="appointment-actions">
                            {appointment.status === 'upcoming' && (
                                <>
                                    <button
                                        className="action-button confirm"
                                        onClick={() => handleAppointmentAction(appointment.id, 'confirmed')}
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        className="action-button reschedule"
                                        onClick={() => handleAppointmentAction(appointment.id, 'rescheduled')}
                                    >
                                        Reschedule
                                    </button>
                                </>
                            )}
                            <button className="action-button view">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPatients = () => (
        <div className="dashboard-section">
            <div className="section-header">
                <h3>Patient Overview</h3>
                <div className="search-container">
                    <input
                        type="search"
                        placeholder="Search patients..."
                        className="search-input"
                    />
                </div>
            </div>
            <div className="patients-grid">
                {patients.map(patient => (
                    <div
                        key={patient.id}
                        className="patient-card"
                        onClick={() => handlePatientClick(patient.id)}
                    >
                        <div className="patient-header">
                            <h4>{patient.name}</h4>
                            <span className="age">Age: {patient.age}</span>
                        </div>
                        <div className="patient-details">
                            <div className="detail-item">
                                <span className="label">Last Visit:</span>
                                <span>{patient.lastVisit}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Condition:</span>
                                <span>{patient.condition}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Status:</span>
                                <span className={`status ${patient.status.toLowerCase()}`}>
                                    {patient.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSchedule = () => (
        <div className="dashboard-section">
            <div className="section-header">
                <h3>Weekly Schedule</h3>
                <div className="schedule-actions">
                    <button className="schedule-button">Previous Week</button>
                    <span className="current-week">March 18 - March 24, 2024</span>
                    <button className="schedule-button">Next Week</button>
                </div>
            </div>
            <div className="schedule-grid">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                    <div key={day} className="schedule-day">
                        <h4>{day}</h4>
                        <div className="time-slots">
                            <div className="time-slot">
                                <span className="time">09:00 AM</span>
                                <div className="slot-content available">Available</div>
                            </div>
                            <div className="time-slot">
                                <span className="time">10:00 AM</span>
                                <div className="slot-content booked">John Doe - Checkup</div>
                            </div>
                            <div className="time-slot">
                                <span className="time">11:00 AM</span>
                                <div className="slot-content available">Available</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading dashboard...</p>
            </div>
        );
    }

    return (
        <div className="doctor-dashboard">
            <header className="dashboard-header">
                <div className="welcome-section">
                    <h2>Welcome, Dr. Smith</h2>
                    <p>Tuesday, March 19, 2024</p>
                </div>
                <div className="quick-stats">
                    <div className="stat-card">
                        <span className="stat-value">8</span>
                        <span className="stat-label">Today's Appointments</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">3</span>
                        <span className="stat-label">Pending Reports</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">12</span>
                        <span className="stat-label">New Messages</span>
                    </div>
                </div>
            </header>

            <nav className="dashboard-nav">
                <button
                    className={`nav-button ${activeTab === 'appointments' ? 'active' : ''}`}
                    onClick={() => setActiveTab('appointments')}
                >
                    Appointments
                </button>
                <button
                    className={`nav-button ${activeTab === 'patients' ? 'active' : ''}`}
                    onClick={() => setActiveTab('patients')}
                >
                    Patients
                </button>
                <button
                    className={`nav-button ${activeTab === 'schedule' ? 'active' : ''}`}
                    onClick={() => setActiveTab('schedule')}
                >
                    Schedule
                </button>
            </nav>

            <main className="dashboard-content">
                {activeTab === 'appointments' && renderAppointments()}
                {activeTab === 'patients' && renderPatients()}
                {activeTab === 'schedule' && renderSchedule()}
            </main>
        </div>
    );
};

export default DoctorDashboard; 