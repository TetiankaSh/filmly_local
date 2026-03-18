import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../src/data/movies.json';
import './ItemPage.scss';

export const ItemPage = () => {
  const { id } = useParams();
  const movie = data.movies.find(movie => movie.id === +id);

  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState("");
  const [userRating, setUserRating] = useState(5);

  if (!movie) {
    return <div className="error">Movie not found!</div>
  }

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    const reviewObject = {
      id: Date.now(),
      userName: "Guest User", // This would come from our Auth/Profile state later
      text: newReview,
      rating: userRating,
      date: new Date().toLocaleDateString()
    };

    setReviews([reviewObject, ...reviews]);
    setNewReview("");
  };

  return (
    <div className="item-page">
      <Link to="/" className="back-btn">← Back to Home</Link>

      <div className="item-content">
        <img src={movie.poster} alt={movie.title} className="item-content__poster" />
        <div className="item-content__details">
          <h1>{movie.title} ({movie.year})</h1>
          <p className="rating">Global Rating: ⭐ {movie.rating}</p>
          <p className="description">Movie details for ID: {id}</p>

          {/* Action Buttons Section */}
          <div className="item-actions">
            <button
              className="item-actions__btn item-actions__btn--fav"
              onClick={() => alert('Sign up or log in to add item to favorites')}
            >
              ❤️ Add to Favorites
            </button>
            <button
              className="item-actions__btn item-actions__btn--watch"
              onClick={() => alert('Sign up or log in to add item to watchlist')}
            >
              ➕ Add to Watchlist
            </button>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* 3. Add Review Section */}
      <section className="review-form-section">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmitReview} className="review-form">
          <div className="rating-select">
            <label>Your Rating: </label>
            <select value={userRating} onChange={(e) => setUserRating(+e.target.value)}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} ⭐</option>
              ))}
            </select>
          </div>
          <textarea
            placeholder="What did you think of this movie?"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Post Review</button>
        </form>
      </section>

      {/* 4. Display Reviews Section */}
      <section className="reviews-display-section">
        <h3>User Reviews ({reviews.length})</h3>
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Be the first!</p>
        ) : (
          <ul className="reviews-list">
            {reviews.map(review => (
              <li key={review.id} className="review-item">
                <div className="review-header">
                  <strong>{review.userName}</strong>
                  <span>⭐ {review.rating}/10</span>
                  <small>{review.date}</small>
                </div>
                <p className="review-text">{review.text}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}