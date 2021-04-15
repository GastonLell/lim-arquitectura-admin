import {Container, Row, Col} from "react-bootstrap";
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
        </Container>
    )
}
export default Admin;