import './Top10Scroll.scss';
import data from '../../src/data/movies.json';
import { Link } from 'react-router-dom';

export const Top10Scroll = ({ type, genre, sortBy }) => {
  const filteredList = data.movies
    .filter(item => (type ? item.type === type : true))
    .filter(item => (genre ? item.genre.includes(genre) : true))
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.year - a.year;
      return 0;
    })
    .slice(0, 10);

  return (
    <div className="container">
      {filteredList.map(movie => (
        <Link to={`/item/${movie.id}`} key={movie.id} className="movie">
          <img src={movie.poster} alt={movie.title} className="movie__img" />
          <p className="movie__title">{movie.title}</p>
          <div className="movie__info">
            <p className="movie__info__year">{movie.year}</p>
            <p className="movie__info__rating">{movie.rating}⭐</p>
          </div>
        </Link>
      ))}
    </div>
  )
}