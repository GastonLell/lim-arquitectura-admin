import { useState } from "react";
import { useHistory } from "react-router-dom";

//funcion de ingreso de usuario
import { signIn } from "../firebase/auth";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import ModalLoading from "../components/ModalLoading";

const SignIn = () => {
  const [show, setShow] = useState(false);

  const history = useHistory();
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const UsuarioContraseña = (e) => {
    e.preventDefault();
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const submitUsuario = async (e) => {
    e.preventDefault();

    signIn(usuario);

    setShow(true);

    setTimeout(() => {
      setShow(false);
      history.push("/admin");
    }, 3000);

    setUsuario({
      email: "",
      password: "",
    });
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="m-4">Ingresar</h2>
        </Col>
      </Row>
      
      <Form
        onSubmit={submitUsuario}
        className="w-50 m-auto border border-dark p-4"
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onChange={UsuarioContraseña}
            name="email"
            value={usuario.email}
            className="border-dark"
            type="email"
            placeholder="ingrese su email..."
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            onChange={UsuarioContraseña}
            name="password"
            value={usuario.password}
            className="border-dark"
            type="password"
            placeholder="contraseña..."
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      <ModalLoading show={show} setShow={setShow} />
    </Container>
  );
};
export default SignIn;
