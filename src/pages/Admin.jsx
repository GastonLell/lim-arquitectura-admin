import app from "../firebase/client";
import {Container, Row, Col, Button} from "react-bootstrap";
import {FiMail, FiLogOut} from 'react-icons/fi';

import {Link} from "react-router-dom";
import FormAdmin from "../components/FormAdmin";

const Admin = () => {
    return(
        <Container>
            <Row className="justify-content-end my-2 mx-0" >
                <Link to="/inbox" className="px-2"><Button><FiMail/></Button></Link>
                <Button onClick={() => app.auth().signOut()} variant="danger"><FiLogOut/></Button>
            </Row>
            <Row>
                <Col>
                    <h2 className="p-5">Administración de contenidos</h2>
                </Col>
            </Row>
            <Row xs={2} className="justify-content-center">
                <FormAdmin/>
            </Row>

        </Container>
    )
}
export default Admin;