import app from "../firebase/client";
import {Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import FormAdmin from "../components/FormAdmin";

const Admin = () => {
    return(
        <Container>
            <Row className="justify-content-end my-2 mx-0" >
                <Link to="/inbox"><Button>Mensajeria</Button></Link>
            </Row>
            <Row>
                <Col>
                    <h2 className="p-5">Administración de contenidos</h2>
                </Col>
            </Row>
            <Row xs={2} className="justify-content-center">
                <FormAdmin/>
            </Row>
            <Row className="justify-content-end p-5">
                <Button onClick={() => app.auth().signOut()} variant="danger">Salir</Button>
            </Row>
        </Container>
    )
}
export default Admin;