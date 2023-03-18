import React, { useState } from 'react';
import { Button, Form, Row, Col, CardGroup, Card } from 'react-bootstrap';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";

export const UserUpdate = () => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  const updateUser = (username) => {
    fetch(`https://enigmatic-eyrie-99477.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        if (updatedUser) {
          dispatch(setUser(updatedUser));
          localStorage.setItem("user", JSON.stringify(updatedUser));
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch(`https://enigmatic-eyrie-99477.herokuapp.com/users/${user.Username}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Changes saved. Please logout and login again to show changes.");
          updateUser(username);
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h4 className="text-start h2 mb-0">Update Profile Information</h4>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="3"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Birthday: </Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col className="text-end">
            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
