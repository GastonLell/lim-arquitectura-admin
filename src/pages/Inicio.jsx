//REACT
import { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

//CONTEXT AUTH
import { AuthContext } from "../firebase/auth";

//BOOTSTRAP
import { Container, Row, Col } from "react-bootstrap";

const Inicio = () => {
    
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <Container>
      <Row className="p-5">
        <Col>
          <h2>Bienvenidos al administrador de LIM Arquitectura</h2>
          <p>Por favor, ingrese a su cuenta para poder realizar cambios</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/login">Ingresar</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;
