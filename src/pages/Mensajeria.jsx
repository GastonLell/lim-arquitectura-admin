import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { MensajeriaContext } from "../firebase/dbMensajes";

import { Container, Row, Col, Toast, ToastBody, Button } from "react-bootstrap";

const Mensajeria = () => {
  const { mensajes } = useContext(MensajeriaContext);

  const [mensajesDB, setMensajesDB] = useState([]);
  const [mensaje, setMensaje] = useState();

  const traerUnMensaje = (id) => {
    let msj = mensajesDB.find((item) => item.id === id);
    setMensaje(msj);
  };

  const obtenerFecha = (data) => new Date(data * 1000)

  useEffect(() => {
    setMensajesDB(mensajes);
  }, [mensajes]);

  return (
    <Container id="mensajeria" className="py-4">

      <h2 className="py-3">Mensajería</h2>

      <Row xs={2} className="justify-content-center border ">
        <Col xs={4} className="border py-3 overflow-auto mensajes">
          {!!mensajesDB &&
            mensajesDB.map((item) => {
              let fechaConvert = obtenerFecha(item.data.fecha.seconds)
              return (
                <Button className="btn-msj" variant="outline-dark" onClick={() => traerUnMensaje(item.id)}>
                  <Toast>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                      />
                      <strong className="mr-auto">{item.data.nombre}</strong>
                      <small>
                        {fechaConvert.toLocaleDateString("es-ES")}

                      </small>
                    </Toast.Header>
                    <Toast.Body>{item.data.email} </Toast.Body>
                  </Toast>
                </Button>
              );
            })}
        </Col>
        <Col xs={8} className="border py-3">
          <Toast bsPrefix="toast-mensaje">
            <ToastBody>
              <h3>Asunto:</h3>
              <span>Mensaje de asunto</span>
              <br/><br/>

              <h3>Emisor:</h3>
              <span>{mensaje?.data?.nombre} </span> | | <span>{mensaje?.data?.email}</span>
              <br/><br/>
              
              <h3>Mensaje:</h3>
              <p>
                {mensaje?.data?.mensaje}
              </p>
              <br/><br/>

              <Button className="respuesta-email">
                <a
                  href={`mailto:${mensaje?.data?.email}?Subject=Respuesta%20LIM%20Arquitectura`}
                  target="__blank">Responder
                </a>
              </Button>

            </ToastBody>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
export default Mensajeria;
