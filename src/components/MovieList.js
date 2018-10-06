import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log(state);
  return { movies: state.movies };
};

const ConnectedMovieList = ({ movies }) => (
  <ul className="list-group list-group-flush">
    {movies.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.name} - {el.description}
      </li>
    ))}
  </ul>
);

const MovieList = connect(mapStateToProps)(ConnectedMovieList);

export default MovieList;
