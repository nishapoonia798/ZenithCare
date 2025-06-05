import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isLoading, setIsLoading] = useState(true);
    const { isLoggedIn, userRole } = useAuth();

    // Sample data - replace with API calls in production
    const [stats] = useState({
        totalDoctors: 45,
        totalPatients: 1250,
        activeAppointments: 128,
        revenue: 52460
    });

    const [doctors] = useState([
        {
            id: 1,
            name: 'Dr. John Smith',
            specialization: 'Cardiology',
            patients: 45,
            rating: 4.8,
            status: 'active'
        },
        {
            id: 2,
            name: 'Dr. Sarah Johnson',
            specialization: 'Pediatrics',
            patients: 38,
            rating: 4.9,
            status: 'active'
        }
    ]);

    const [departments] = useState([
        {
            id: 1,
            name: 'Cardiology',
            head: 'Dr. John Smith',
            staff: 12,
            patients: 145
        },
        {
            id: 2,
            name: 'Pediatrics',
            head: 'Dr. Sarah Johnson',
            staff: 8,
            patients: 98
        }
    ]);

    const [recentActivities] = useState([
        {
            id: 1,
            type: 'appointment',
            description: 'New appointment scheduled',
            time: '2 hours ago'
        },
        {
            id: 2,
            type: 'registration',
            description: 'New doctor registration',
            time: '4 hours ago'
        }
    ]);

    useEffect(() => {
        // Check authentication and role
        if (!isLoggedIn || userRole !== 'admin') {
            navigate('/login');
            return;
        }

        // Simulate loading data
        const loadData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading dashboard data:', error);
                setIsLoading(false);
            }
        };

        loadData();
    }, [isLoggedIn, userRole, navigate]);

    const handleSaveSettings = (e) => {
        e.preventDefault();
        // Implement settings save functionality
        console.log('Saving settings...');
    };

    const handleAddDoctor = () => {
        // Implement add doctor functionality
        console.log('Adding new doctor...');
    };

    const handleEditDoctor = (doctorId) => {
        // Implement edit doctor functionality
        console.log('Editing doctor:', doctorId);
    };

    const handleDeleteDoctor = (doctorId) => {
        // Implement delete doctor functionality
        console.log('Deleting doctor:', doctorId);
    };

    const handleAddDepartment = () => {
        // Implement add department functionality
        console.log('Adding new department...');
    };

    const renderOverview = () => (
        <div className="dashboard-section">
            <div className="stats-grid">
                <div className="stat-card total-doctors">
                    <div className="stat-icon">👨‍⚕️</div>
                    <div className="stat-info">
                        <span className="stat-value">{stats.totalDoctors}</span>
                        <span className="stat-label">Total Doctors</span>
                    </div>
                </div>
                <div className="stat-card total-patients">
                    <div className="stat-icon">🏥</div>
                    <div className="stat-info">
                        <span className="stat-value">{stats.totalPatients}</span>
                        <span className="stat-label">Total Patients</span>
                    </div>
                </div>
                <div className="stat-card active-appointments">
                    <div className="stat-icon">📅</div>
                    <div className="stat-info">
                        <span className="stat-value">{stats.activeAppointments}</span>
                        <span className="stat-label">Active Appointments</span>
                    </div>
                </div>
                <div className="stat-card revenue">
                    <div className="stat-icon">💰</div>
                    <div className="stat-info">
                        <span className="stat-value">${stats.revenue}</span>
                        <span className="stat-label">Monthly Revenue</span>
                    </div>
                </div>
            </div>

            <div className="recent-activities">
                <h3>Recent Activities</h3>
                <div className="activities-list">
                    {recentActivities.map(activity => (
                        <div key={activity.id} className="activity-item">
                            <div className={`activity-icon ${activity.type}`}>
                                {activity.type === 'appointment' ? '📅' : '📋'}
                            </div>
                            <div className="activity-info">
                                <p>{activity.description}</p>
                                <span>{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderDoctors = () => (
        <div className="dashboard-section">
            <div className="section-header">
                <h3>Manage Doctors</h3>
                <button className="add-button" onClick={handleAddDoctor}>+ Add New Doctor</button>
            </div>
            <div className="doctors-list">
                <div className="list-header">
                    <span>Name</span>
                    <span>Specialization</span>
                    <span>Patients</span>
                    <span>Rating</span>
                    <span>Status</span>
                    <span>Actions</span>
                </div>
                {doctors.map(doctor => (
                    <div key={doctor.id} className="doctor-item">
                        <span className="doctor-name">{doctor.name}</span>
                        <span>{doctor.specialization}</span>
                        <span>{doctor.patients}</span>
                        <span className="rating">⭐ {doctor.rating}</span>
                        <span className={`status ${doctor.status}`}>{doctor.status}</span>
                        <div className="actions">
                            <button
                                className="action-button edit"
                                onClick={() => handleEditDoctor(doctor.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="action-button delete"
                                onClick={() => handleDeleteDoctor(doctor.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderDepartments = () => (
        <div className="dashboard-section">
            <div className="section-header">
                <h3>Departments</h3>
                <button className="add-button" onClick={handleAddDepartment}>+ Add Department</button>
            </div>
            <div className="departments-grid">
                {departments.map(dept => (
                    <div key={dept.id} className="department-card">
                        <div className="department-header">
                            <h4>{dept.name}</h4>
                            <button className="more-button">⋮</button>
                        </div>
                        <div className="department-stats">
                            <div className="stat-item">
                                <span className="label">Department Head</span>
                                <span className="value">{dept.head}</span>
                            </div>
                            <div className="stat-item">
                                <span className="label">Staff Members</span>
                                <span className="value">{dept.staff}</span>
                            </div>
                            <div className="stat-item">
                                <span className="label">Active Patients</span>
                                <span className="value">{dept.patients}</span>
                            </div>
                        </div>
                        <div className="department-actions">
                            <button className="action-button">View Details</button>
                            <button className="action-button">Manage Staff</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="dashboard-section">
            <div className="settings-grid">
                <div className="settings-card">
                    <h4>Hospital Information</h4>
                    <form className="settings-form" onSubmit={handleSaveSettings}>
                        <div className="form-group">
                            <label>Hospital Name</label>
                            <input type="text" defaultValue="ZenithCare Hospital" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea defaultValue="123 Healthcare Ave, Medical District" />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="tel" defaultValue="+1 234 567 8900" />
                        </div>
                        <button type="submit" className="save-button">Save Changes</button>
                    </form>
                </div>

                <div className="settings-card">
                    <h4>System Settings</h4>
                    <div className="settings-options">
                        <div className="setting-item">
                            <span>Enable Notifications</span>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="setting-item">
                            <span>Maintenance Mode</span>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="setting-item">
                            <span>Auto Backup</span>
                            <label className="switch">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
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
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <div className="welcome-section">
                    <h2>Welcome, Admin</h2>
                    <p>Manage your hospital system</p>
                </div>
                <div className="header-actions">
                    <button className="notification-button">
                        🔔
                        <span className="notification-badge">3</span>
                    </button>
                    <button className="profile-button">
                        👤 Admin Profile
                    </button>
                </div>
            </header>

            <nav className="dashboard-nav">
                <button
                    className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`nav-button ${activeTab === 'doctors' ? 'active' : ''}`}
                    onClick={() => setActiveTab('doctors')}
                >
                    Doctors
                </button>
                <button
                    className={`nav-button ${activeTab === 'departments' ? 'active' : ''}`}
                    onClick={() => setActiveTab('departments')}
                >
                    Departments
                </button>
                <button
                    className={`nav-button ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('settings')}
                >
                    Settings
                </button>
            </nav>

            <main className="dashboard-content">
                {activeTab === 'overview' && renderOverview()}
                {activeTab === 'doctors' && renderDoctors()}
                {activeTab === 'departments' && renderDepartments()}
                {activeTab === 'settings' && renderSettings()}
            </main>
        </div>
    );
};

export default AdminDashboard; 