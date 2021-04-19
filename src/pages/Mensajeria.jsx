import { Container, Row, Col, Toast, ToastBody } from "react-bootstrap";

const Mensajeria = () => {
  return (
    <Container id="mensajeria">
      <h2>Mensajería</h2>

      <Row xs={2} className="justify-content-center border ">
        <Col xs={4} className="border py-3 overflow-auto mensajes">
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Asunto</strong>
              <small>Fecha</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>

          <Toast>
            <Toast.Header>
              <strong className="mr-auto">Asunto</strong>
              <small>Fecha</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>

					<Toast>
            <Toast.Header>
              <strong className="mr-auto">Asunto</strong>
              <small>Fecha</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>

          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Asunto</strong>
              <small>Fecha</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </Col>
        <Col xs={8} className="border py-3">
          <Toast bsPrefix="toast-mensaje">
            <ToastBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aspernatur excepturi illo accusamus laboriosam molestias.
            </ToastBody>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
export default Mensajeria;
