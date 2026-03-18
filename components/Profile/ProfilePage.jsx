import { useState } from 'react';
import './ProfilePage.scss';

export const ProfilePage = () => {
  // Mock user data - later this comes from your Auth context/Backend
  const [user, setUser] = useState({
    username: "John Doe",
    bio: "Movie buff and enthusiast. Always looking for the next great sci-fi series.",
    memberSince: "Jan 2024",
    avatar: "" // Empty for now to show the white circle
  });

  return (
    <div className="profile-page">
      {/* 1. Profile Header / Hero */}
      <section className="profile-hero">
        <div className="profile-hero__container">
          <div className="profile-hero__avatar">
            {/* White circle placeholder */}
            <div className="profile-hero__avatar-placeholder"></div>
          </div>

          <div className="profile-hero__info">
            <h1>{user.username}</h1>
            <p className="role">{user.role}</p>
            <p className="bio">{user.bio}</p>
            <span className="date">Member since {user.memberSince}</span>
          </div>

          <div className="profile-hero__actions">
            <button className="edit-btn">Edit Profile</button>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <div className="profile-stats">
        <div className="stat-item">
          <strong>124</strong>
          <span>Watched</span>
        </div>
        <div className="stat-item">
          <strong>12</strong>
          <span>Reviews</span>
        </div>
        <div className="stat-item">
          <strong>45</strong>
          <span>Watchlist</span>
        </div>
      </div>

      {/* 3. Main Content Sections */}
      <div className="profile-content">
        <section className="profile-section">
          <h3>Recent Reviews</h3>
          <div className="placeholder-card">
            <p>You haven't written any reviews yet. Go to a movie page to share your thoughts!</p>
          </div>
        </section>

        <section className="profile-section">
          <h3>My Watchlist</h3>
          <div className="watchlist-grid">
            {/* You can map through a small list of movies here later */}
            <div className="placeholder-card">Your watchlist is empty.</div>
          </div>
        </section>
      </div>
    </div>
  );
};