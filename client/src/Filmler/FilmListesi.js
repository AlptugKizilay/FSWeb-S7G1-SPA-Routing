import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmDetayları key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;
  const navigate = useNavigate()

  return (
    <div className="movie-card" onClick={() => navigate(`/filmler/${props.movie.id}`)}>
      
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
