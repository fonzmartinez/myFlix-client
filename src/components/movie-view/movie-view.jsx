import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import { FavButton } from "../fav-button/fav-button";

import "./movie-view.scss";

export const MovieView = () => {
  const movies = useSelector((state) => state.movies.movies);

  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  return (
    <>
      <div>
        <img src={movie.image} />
      </div>

      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>

      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>

      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>

      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>

      <div>
        <FavButton
          movie={movie}
        />
      </div>

      <div>
        <Link to={`/`}>
          <Button variant="secondary" size="lg"
            className="back-button"
            style={{ cursor: "pointer" }}>
            Back
          </Button>
        </Link>
      </div>
    </>
  );
};
