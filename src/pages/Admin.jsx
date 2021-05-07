//FIREBASE
import app from "../firebase/client";

//REACT ROUTER
import {Link} from "react-router-dom";

// COMPONENTES BOOTSTRAP Y REACT ICONS
import {Container, Row, Col, Navbar, Button} from "react-bootstrap";
import {FiMail, FiLogOut} from 'react-icons/fi';

//COMPONENTES
import FormAdmin from "../components/FormAdmin";
//assets
import logo from "../assets/logo.svg";

const Admin = () => {
    return(
        <Container fluid className="p-0">
            <Navbar sticky="top" bg="dark" className="justify-content-between mx-0" >
                <div className="container-logo">
                    <Link to="/">
                        <img className="w-50" src={logo} alt="LIM Arquitectura" />
                    </Link>
                </div>
                <div className="mensaje-y-out">
                    <Link to="/inbox" className="px-2"><Button><FiMail/></Button></Link>
                    <Button onClick={() => app.auth().signOut()} variant="danger"><FiLogOut/></Button>
                </div>
            </Navbar>
            <Row className="m-0">
                <Col>
                    <h2 className="p-5">Administración de contenidos</h2>
                </Col>
            </Row>
            <Row xs={2} className="justify-content-center m-0">
                <FormAdmin/>
            </Row>

        </Container>
    )
}
export default Admin;