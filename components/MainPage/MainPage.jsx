import { Top10Scroll } from '../Top10Scroll/Top10Scroll';
import './MainPage.scss';

export const MainPage = () => {
  return (
    <div className="main-page">
      {/* 1. Search Bar Section */}
      <div className="main-page__search-container">
        <div className="main-page__search-bar">
          <input
            type="text"
            placeholder="Search for movies, TV series..."
            className="main-page__search-bar__input"
          />
          <button className="main-page__search-bar__button">🔍</button>
        </div>
      </div>

      <div className="main-page__content">
        {/* 2. Sections with specific filters */}
        <section className="main-section">
          <h2>Trending Now</h2>
          <Top10Scroll sortBy="rating" />
        </section>

        <section className="main-section">
          <h2>Top Movies</h2>
          <Top10Scroll type="movie" />
        </section>

        {/* <section className="main-section">
          <h2>Feel-Good Comedies</h2>
          <Top10Scroll genre="Comedy" />
        </section> */}

        <section className="main-section">
          <h2>Top TV Series</h2>
          <Top10Scroll type="tv" />
        </section>

        <section className="main-section">
          <h2>Coming Soon</h2>
          <Top10Scroll sortBy="newest" />
        </section>
      </div>
    </div>
  );
};