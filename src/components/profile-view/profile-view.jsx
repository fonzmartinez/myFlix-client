import React from "react";

import { useSelector } from "react-redux";

import { UserUpdate } from "./user-update";
import { UserInfo } from "./user-info";
import { UserFavorites } from "./user-favorites";
import { DeleteUser } from "./delete-user";
import { Container, Row, Col, Card } from "react-bootstrap";

export const ProfileView = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <UserInfo />
            </Card.Body>
          </Card>
        </Col>

        <Col >
          <Card>
            <Card.Body>
              <UserUpdate />
              <DeleteUser />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <UserFavorites movies={movies} />
      </Row>
    </Container>
  );
};

