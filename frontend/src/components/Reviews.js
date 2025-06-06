import React, { useState } from 'react';
import './Reviews.css';
import { Rating } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Reviews = ({ type, id }) => {
    const { currentUser } = useAuth();
    const [reviews, setReviews] = useState([
        // Dummy data - replace with API calls
        {
            id: 1,
            userId: "user1",
            userName: "John Doe",
            rating: 5,
            comment: "Excellent service and very professional staff!",
            date: "2024-03-01",
            verified: true
        },
        // Add more dummy reviews
    ]);

    const [newReview, setNewReview] = useState({
        rating: 0,
        comment: ""
    });

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (!currentUser) {
            alert("Please login to submit a review");
            return;
        }

        const review = {
            id: Date.now(),
            userId: currentUser.id,
            userName: currentUser.name,
            rating: newReview.rating,
            comment: newReview.comment,
            date: new Date().toISOString().split('T')[0],
            verified: true
        };

        // TODO: Send to API
        setReviews([review, ...reviews]);
        setNewReview({ rating: 0, comment: "" });
    };

    return (
        <div className="reviews-container">
            <h2>Reviews & Ratings</h2>

            {currentUser && (
                <form onSubmit={handleSubmitReview} className="review-form">
                    <div className="rating-input">
                        <label>Your Rating:</label>
                        <Rating
                            value={newReview.rating}
                            onChange={(event, newValue) => {
                                setNewReview({ ...newReview, rating: newValue });
                            }}
                            size="large"
                        />
                    </div>
                    <div className="comment-input">
                        <label>Your Review:</label>
                        <textarea
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            placeholder="Share your experience..."
                            required
                        />
                    </div>
                    <button type="submit" className="submit-review-btn">Submit Review</button>
                </form>
            )}

            <div className="reviews-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <h4>{review.userName}</h4>
                                {review.verified && <span className="verified-badge">✓ Verified Visit</span>}
                            </div>
                            <Rating value={review.rating} readOnly size="small" />
                        </div>
                        <p className="review-comment">{review.comment}</p>
                        <div className="review-footer">
                            <span className="review-date">{review.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews; 