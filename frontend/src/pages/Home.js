import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import hospitalImage from '../assets/hospital-building.jpg';

const Home = () => {
  const specialties = [
    { id: 1, name: 'Emergency & Trauma', icon: '🚑', description: '24/7 Emergency Care Services' },
    { id: 2, name: 'Cardiac Sciences', icon: '❤️', description: 'Advanced Cardiac Care' },
    { id: 3, name: 'Neuro Sciences', icon: '🧠', description: 'Expert Neurological Treatment' },
    { id: 4, name: 'Pulmonology', icon: '🫁', description: 'Respiratory Care Excellence' },
    { id: 5, name: 'Endoscopy', icon: '🔬', description: 'Advanced Diagnostic Services' },
    { id: 6, name: 'Ophthalmology', icon: '👁️', description: 'Complete Eye Care' },
    { id: 7, name: 'Pathology', icon: '🧪', description: 'State-of-the-art Lab Services' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>TRADITION OF CARE</h1>
            <h2>REPUTATION FOR EXCELLENCE</h2>
            <h3>SINCE 2024</h3>
            <p>Your trusted healthcare partner, providing the highest standard of medical care with state-of-the-art facilities.</p>
            <Link to="/appointments" className="cta-button">Book Appointment</Link>
          </div>
          <div className="hero-image">
            <img src={hospitalImage} alt="ZenithCare Hospital Building" />
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="quick-info">
        <div className="info-container">
          <div className="info-item">
            <h3>24/7 Emergency</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>Book Appointment</h3>
            <p>+1 (555) 987-6543</p>
          </div>
          <div className="info-item">
            <h3>Blood Bank</h3>
            <p>Available 24/7</p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties">
        <h2>Our Specialties</h2>
        <div className="specialties-grid">
          {specialties.map(specialty => (
            <div key={specialty.id} className="specialty-card">
              <div className="specialty-icon">{specialty.icon}</div>
              <h3>{specialty.name}</h3>
              <p>{specialty.description}</p>
              <Link to={`/specialties/${specialty.id}`} className="learn-more">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose ZenithCare?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🏆</div>
            <h3>Excellence in Healthcare</h3>
            <p>State-of-the-art facilities and expert medical professionals</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⏰</div>
            <h3>24/7 Care</h3>
            <p>Round-the-clock medical services and emergency care</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👨‍⚕️</div>
            <h3>Expert Doctors</h3>
            <p>Highly qualified and experienced medical staff</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔬</div>
            <h3>Advanced Technology</h3>
            <p>Latest medical equipment and treatment methods</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
