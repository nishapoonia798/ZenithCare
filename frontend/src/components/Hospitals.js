import React, { useState } from 'react';
import { Rating } from '@mui/material';
import Reviews from './Reviews';
import './Hospitals.css';

const Hospitals = () => {
    const [hospitals] = useState([
        {
            id: 1,
            name: "ZenithCare Main Hospital",
            address: "123 Healthcare Ave, Medical District",
            phone: "+1 (555) 123-4567",
            email: "info@zenithcare.com",
            rating: 4.5,
            totalReviews: 128,
            specialties: ["Cardiology", "Neurology", "Orthopedics"],
            coordinates: { lat: 40.7128, lng: -74.0060 }, // Example coordinates
            image: "/hospital-main.jpg",
            facilities: [
                "24/7 Emergency",
                "ICU",
                "Blood Bank",
                "Pharmacy",
                "Laboratory"
            ]
        },
        // Add more hospitals here
    ]);

    const [selectedHospital, setSelectedHospital] = useState(null);

    const openDirections = (coordinates) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
        window.open(url, '_blank');
    };

    return (
        <div className="hospitals-page">
            <h1>Our Hospitals</h1>
            <div className="hospitals-grid">
                {hospitals.map(hospital => (
                    <div key={hospital.id} className="hospital-card">
                        <img src={hospital.image} alt={hospital.name} className="hospital-image" />
                        <div className="hospital-info">
                            <h2>{hospital.name}</h2>
                            <div className="rating-container">
                                <Rating value={hospital.rating} readOnly precision={0.5} />
                                <span>({hospital.totalReviews} reviews)</span>
                            </div>
                            <div className="contact-info">
                                <p><strong>Address:</strong> {hospital.address}</p>
                                <p><strong>Phone:</strong> {hospital.phone}</p>
                                <p><strong>Email:</strong> {hospital.email}</p>
                            </div>
                            <div className="specialties">
                                <h3>Specialties:</h3>
                                <div className="tags">
                                    {hospital.specialties.map((specialty, index) => (
                                        <span key={index} className="specialty-tag">{specialty}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="facilities">
                                <h3>Facilities:</h3>
                                <ul>
                                    {hospital.facilities.map((facility, index) => (
                                        <li key={index}>{facility}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hospital-actions">
                                <button
                                    className="direction-btn"
                                    onClick={() => openDirections(hospital.coordinates)}
                                >
                                    Get Directions
                                </button>
                                <button
                                    className="review-btn"
                                    onClick={() => setSelectedHospital(hospital.id)}
                                >
                                    View Reviews
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedHospital && (
                <div className="reviews-section">
                    <Reviews type="hospital" id={selectedHospital} />
                </div>
            )}
        </div>
    );
};

export default Hospitals; 