import React from "react";
import { Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useSelector } from "react-redux";


export const UserFavorites = () => {
  const user = useSelector((state) => state.user.user);
  const movies = useSelector((state) => state.movies.movies);

  let favoriteMoviesList = movies.filter((m) =>
    user.FavoriteMovies.includes(m.id)
  );

  const filter = useSelector((state) => state.movies.filter)
    .trim()
    .toLowerCase();

  const filteredMovies = favoriteMoviesList.filter((movie) =>
    movie.title.toLowerCase().includes(filter)
  );

  return (
    <Row>
      {favoriteMoviesList.length === 0 ? (
        <Col>The list of favorite movies is empty</Col>
      ) : (
        <>
          <div className="text-start h2 mb-4">Favorite Movies</div>

          {filteredMovies.map((movie) => (
            <Col className="mb-5" key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};

