import React from "react";

import { UserUpdate } from "./user-update";
import { UserInfo } from "./user-info";
import { UserFavorites } from "./user-favorites";
import { DeleteUser } from "./delete-user";
import { Container, Row, Col, Card } from "react-bootstrap";

export const ProfileView = ({ movies }) => {

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const storedMovies = JSON.parse(localStorage.getItem("movies"));

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <UserInfo user={storedUser} />
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Body>
              <UserUpdate storedToken={storedToken} storedUser={storedUser} />
              <DeleteUser storedToken={storedToken} storedUser={storedUser} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <UserFavorites movies={movies} storedUser={storedUser} />
      </Row>
    </Container>
  );
};
