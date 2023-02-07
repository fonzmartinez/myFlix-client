import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Breakfast Club",
      image: "https://www.nicepng.com/png/detail/653-6539105_image-result-for-the-breakfast-club-from-the.png",
      description: "Five high school students meet in Satudrday detention and discover how they have a lot more in common than they thought.",
      genre: "Comedy",
      director: "John Hughes"
    },
    {
      id: 2,
      title: "Valley Girl",
      image: "https://images.fanart.tv/fanart/valley-girl-5b66e3bf2a4fb.png",
      description: "Julie, a girl from the valley, meets Randy, a punk from the city. They are from different worlds and find love. Somehow they need to stay together in spite of her trendy, shallow friends.",
      genre: "Comedy",
      director: "Martha Coolidge"
    },
    {
      id: 3,
      title: "Pretty In Pink",
      image: "https://images.fanart.tv/fanart/pretty-in-pink-541051259acfc.png",
      description: "A poor girl must choose between the affections of dating her childhood sweetheart or a rich but sensitive playboy.",
      genre: "Drama",
      director: "Howard Deutch"
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() =>
        setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(movie);
          }}
        />
      ))}
    </div>
  );
};