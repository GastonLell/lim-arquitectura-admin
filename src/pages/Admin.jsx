import app from "../firebase/client";
import {Container, Row, Col, Button} from "react-bootstrap";
import FormAdmin from "../components/FormAdmin";

const Admin = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h2 className="p-5">Administración de contenidos</h2>
                </Col>
            </Row>
            <Row>
                <FormAdmin/>
            </Row>
            <Row>
                <Button onClick={() => app.auth().signOut()} variant="danger">Salir</Button>
            </Row>
        </Container>
    )
}
export default Admin;