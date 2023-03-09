import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FavButton } from "../fav-button/fav-button";

import "./movie-view.scss";


export const MovieView = ({ movies, user, updateUserOnFav }) => {
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
        <span>{movie.genre.name}</span>
      </div>

      <div>
        <span>Director: </span>
        <span>{movie.director.name}</span>
      </div>

      <div>
        <FavButton
          user={user}
          movie={movie}
          updateUserOnFav={updateUserOnFav}
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

