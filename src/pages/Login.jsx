// dependencias react
import { useCallback, useContext } from "react";
import { Redirect } from "react-router";

//firebase
import app from "../firebase/client";
import { AuthContext } from "../firebase/auth";

//bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = ({ history }) => {
  const { currentUser } = useContext(AuthContext);


  const handleLogin = useCallback(

    async (event) => {

      event.preventDefault();

      const { email, password } = event.target.elements;

      try {

        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);

        history.push("/admin");

      } catch (error) {

        alert(error);

      }
    },
    [history]
  );

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="m-4">Ingresar</h2>
        </Col>
      </Row>

      <Form onSubmit={handleLogin} className="w-50 m-auto border border-dark p-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="email"
            className="border-dark"
            type="email"
            placeholder="ingrese su email..."
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            name="password"
            className="border-dark"
            type="password"
            placeholder="contraseña..."
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default Login;