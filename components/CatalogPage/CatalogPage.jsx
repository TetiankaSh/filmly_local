import { useState, useMemo } from 'react';
import data from '../../src/data/movies.json';
import './CatalogPage.scss';
import { Link } from 'react-router-dom';

// We'll assume the JSON has a "type" field (e.g., "movie" or "tv")
export const CatalogPage = ({ type }) => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // 1. Filter data based on Type (Movie/TV) and Genre
  const filteredContent = useMemo(() => {
    return data.movies
      .filter(item => item.type === type) // Filter by category
      .filter(item => (selectedGenre === 'All' ? true : item.genre.includes(selectedGenre))) // Filter by genre
      .sort((a, b) => {
        if (sortBy === 'newest') return b.year - a.year;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [type, selectedGenre, sortBy]);

  // Unique genres for the filter sidebar
  const genres = ['All', 'Action', 'Drama', 'Sci-Fi', 'Comedy', 'Horror'];

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1>{type === 'movie' ? 'Movies' : 'TV Series'}</h1>
        <p>Discover the best {type === 'movie' ? 'cinema' : 'shows'} on Filmly</p>
      </header>

      <div className="catalog-container">
        {/* Left Sidebar Filters */}
        <aside className="catalog-filters">
          <div className="filter-group">
            <h4>Genres</h4>
            {genres.map(genre => (
              <button
                key={genre}
                className={selectedGenre === genre ? 'active' : ''}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h4>Sort By</h4>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest First</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </aside>

        {/* Main Grid Section */}
        <main className="catalog-grid">
          {filteredContent.length > 0 ? (
            filteredContent.map(item => (
              <Link to={`/item/${item.id}`} key={item.id} className="movie-card">
                <div className="movie-card__img-container">
                  <img src={item.poster} alt={item.title} />
                  <div className="movie-card__rating">⭐ {item.rating}</div>

                  {/* New Hover Overlay */}
                  <div className="movie-card__overlay">
                    <div className="movie-card__actions">
                      <button
                        className="action-btn"
                        onClick={(e) => {
                          e.preventDefault(); // Prevents navigating to the ItemPage
                          alert('Sign up or log in to add item to favorites');
                        }}
                      >
                        ❤️
                      </button>
                      <button
                        className="action-btn"
                        onClick={(e) => {
                          e.preventDefault(); // Prevents navigating to the ItemPage
                          alert('Sign up or log in to add item to watchlist');
                        }}
                      >
                        ➕
                      </button>
                    </div>
                    <p className="overlay-msg">Log in to save items</p>
                  </div>
                </div>
                <div className="movie-card__info">
                  <h3>{item.title}</h3>
                  <span>{item.year}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results">No {type}s found for this category.</div>
          )}
        </main>
      </div>
    </div>
  );
};