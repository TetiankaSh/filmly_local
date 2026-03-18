import { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Temporary variable to switch between states for now
  const isLoggedIn = true;

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <span className="header__logo__icon">Logo icon</span>
        <span className="header__logo__text">Filmly</span>
      </Link>

      <nav className="header__nav">
        {/* <Link to="/" className="header__nav__item">Home</Link> */}

        {/* For now, these all lead to the home page. I'll add the paths
        later 
        */}
        {/* <Link to="/" className="header__nav__item">Genres</Link> */}
        <Link to="/movies" className="header__nav__item">Movies</Link>
        <Link to="/tv-series" className="header__nav__item">TV series</Link>
        <Link to="/" className="header__nav__item">Popular watchlists</Link>
        {/* <Link to="/" className="header__nav__item">Recent</Link> */}
      </nav>

      <div className="header__actions">
            <Link to="/login" className="header__actions__btn header__actions__btn--login">Login</Link>
            <Link to="/signup" className="header__actions__btn header__actions__btn--signup">Sign up</Link>
 
          <div className="header__profile-container">
            {/* The White Circle Profile Pic */}
            <div
              className="header__profile-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></div>

            {/* The Dropdown Menu */}
            {isMenuOpen && (
              <div className="header__dropdown">
                <div className="header__dropdown__info">
                  <strong>John Doe</strong>
                </div>
                <hr />
                <Link to="/profile" className="header__dropdown__item">My Profile</Link>
                <Link to="/watch-list" className="header__dropdown__item">My Watchlist</Link>
                <Link to="/favorites" className="header__dropdown__item">My Favorites</Link>
                {/* <Link to="/settings" className="header__dropdown__item">Settings</Link> */}
                <hr />
                <button className="header__dropdown__item header__dropdown__item--logout">
                  Log Out
                </button>
              </div>
            )}
          </div>
      </div>
    </header>
  )
}