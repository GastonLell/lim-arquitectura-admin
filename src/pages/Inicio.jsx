//REACT
import { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

//CONTEXT AUTH
import { AuthContext } from "../firebase/auth";

//BOOTSTRAP
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
//ASSETS
import logo from "../assets/logo.svg";

const Inicio = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <Container fluid className="p-0">
      <Navbar sticky="top" bg="dark" className="justify-content-between p-3">
        <Link to="/">
          <img className="w-50" src={logo} alt="LIM Arquitectura" />
        </Link>
        <Link to="/login">
          <BiLogIn style={{"color": "#fff", "fontSize": "45px", "textAlign": "center", "paddingRight": "10px"}}/>
        </Link>
      </Navbar>
      <Row className="p-5 m-0">
        <Col>
          <h2>Bienvenidos al administrador de LIM Arquitectura</h2>
          <p>Por favor, ingrese a su cuenta para poder realizar cambios</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Inicio;
{
  /* <Container>
<Navbar bg="dark">
    <Link to="/">
      <img className="w-50" src={logo} alt="LIM Arquitectura"/>
    </Link>
    <Button>
      <Link to="/login">
        <BiLogIn className="p-2"/>
      <Link/>
    </Button>
</Navbar>
<Row className="p-5">
  <Col>
    <h2>Bienvenidos al administrador de LIM Arquitectura</h2>
    <p>Por favor, ingrese a su cuenta para poder realizar cambios</p>
  </Col>
</Row>
</Container> */
}
