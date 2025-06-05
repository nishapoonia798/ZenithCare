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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient",
      text: "The care I received at ZenithCare was exceptional. The staff was attentive and professional throughout my stay.",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      text: "Working at ZenithCare has been rewarding. The focus on patient care and advanced technology sets us apart.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Patient",
      text: "From admission to discharge, everything was seamless. The doctors explained everything clearly.",
      rating: 5
    }
  ];

  const stats = [
    { id: 1, number: "50+", label: "Specialist Doctors", icon: "👨‍⚕️" },
    { id: 2, number: "10k+", label: "Happy Patients", icon: "😊" },
    { id: 3, number: "15+", label: "Years Experience", icon: "🏆" },
    { id: 4, number: "24/7", label: "Emergency Service", icon: "🚑" }
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

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stats-container">
          {stats.map(stat => (
            <div key={stat.id} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
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

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Experience Better Healthcare?</h2>
          <p>Book an appointment today and take the first step towards better health.</p>
          <div className="cta-buttons">
            <Link to="/appointments" className="cta-button">Book Appointment</Link>
            <Link to="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
