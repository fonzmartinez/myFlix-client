import { Link } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";

import "./fav-button.scss";

export const FavButton = ({ movie }) => {
  const user = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const alreadyFavorite = user.FavoriteMovies.find(
    (favMovieId) => favMovieId === movie.id
  );

  const toggleFavorite = () => {
    if (!token) return;

    const url = `https://enigmatic-eyrie-99477.herokuapp.com/users/${user.Username}/movies/${movie.id}`;

    let requestOptions = {
      method: '',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let resultAlert = '';


    if (alreadyFavorite) {
      requestOptions.method = "DELETE";
      resultAlert = `${movie.title} is deleted from the list of favorites`;
    } else {
      requestOptions.method = "POST";
      resultAlert = `${movie.title} is added to the list of favorites`;
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert(`${resultAlert}`);
        dispatch(setUser(data));
      })
  };

  return (
    <Link onClick={() => toggleFavorite()}>
      <Button variant="secondary" size="sm" className="button"> Add/Remove Favorites</Button>
    </Link>
  );
};
