import React from 'react';
import { useNavigate } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const navigate = useNavigate();
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={()=> navigate("/")}>Anasayfa</div>
    </div>
  );
}
