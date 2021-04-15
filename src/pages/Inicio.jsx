import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";

const Inicio = () => {
    return(
        <Container >
            <Row className="p-5">
                <Col>
                    <h2>Bienvenidos al administrador de LIM Arquitectura</h2>
                    <p>Por favor, ingrese a su cuenta para poder realizar cambios</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/signIn">Ingresar</Link>
                </Col>
            </Row>
        </Container>


        
    )
}

export default Inicio;