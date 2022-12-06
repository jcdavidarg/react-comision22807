import "./PeliculaCard.css";

export const PeliculasCard = ({ pelicula }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;

  return (
    <li className="movieCard">
      <img className="movieImage" src={imgUrl} alt={pelicula.title} />
      <div>{pelicula.title}</div>
    </li>
  );
};
