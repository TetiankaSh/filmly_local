import { Link } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <Link to="/favorites" className="sidebar__item">
          <span className="sidebar__icon">❤️</span>
          <span className="sidebar__text">Liked Movies</span>
        </Link>

        <Link to="/favorite-genres" className="sidebar__item">
          <span className="sidebar__icon">📂</span>
          <span className="sidebar__text">Favorite Genres</span>
        </Link>

        <Link to="/watch-list" className="sidebar__item">
          <span className="sidebar__icon">🍿</span>
          <span className="sidebar__text">Watchlist</span>
        </Link>

        <Link to="/recommendations" className="sidebar__item">
          <span className="sidebar__icon">✨</span>
          <span className="sidebar__text">Recommended</span>
        </Link>
      </nav>
    </aside>
  )
}