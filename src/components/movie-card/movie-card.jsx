import React from "react";
import PropTypes from "prop-types";
import { FavButton } from "../fav-button/fav-button";

import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Row className="h-50">
        <Col className="h-100 text-center mt-3">
          <img variant="top" src={movie.image} />
        </Col>
      </Row>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mt-2">{movie.title}</Card.Title>
        <Card.Text className="mt-3">{movie.description}</Card.Text>
        <Row className="mt-auto">
          <Col className="text-start">
            <FavButton movie={movie} />
          </Col>
          <Col className="text-end">
            <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
              <Button variant="secondary" size="lg" className="button-details">
                Details
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired,
  //onMovieClick: PropTypes.func.isRequired
};
