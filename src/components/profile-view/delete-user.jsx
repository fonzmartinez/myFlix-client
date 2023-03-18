import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const DeleteUser = (storedUser) => {
  const user = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");
  const handleDeregister = () => {
    const userWarning = confirm("Are you sure?");

    userWarning === false
      ? alert("Back to Movies App")
      : fetch(
        `https://enigmatic-eyrie-99477.herokuapp.com/users/${user.Username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            alert("Account Deleted");
            localStorage.clear();
            window.location.reload();
          } else {
            alert("Something went wrong");
          }
        })
        .catch((e) => console.log(e));
  };

  return (
    <Row>
      <Col md={12} align="right" >
        <br></br>
        <Button
          onClick={() => handleDeregister(storedUser._id)}
          className="button-delete"
          variant="danger">
          Delete Account
        </Button>
      </Col>
    </Row>
  );
};
