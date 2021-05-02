import app from "../firebase/client";

import { useContext, useEffect, useState } from "react";
import { MensajeriaContext, mensajeLeido } from "../firebase/dbMensajes";

import {Link} from "react-router-dom";

import {FiEdit, FiLogOut, FiCheckCircle} from 'react-icons/fi';
import { Container, Row, Col, Toast, ToastBody, Button } from "react-bootstrap";

const Mensajeria = () => {
  const { mensajes } = useContext(MensajeriaContext);

  const [mensajesDB, setMensajesDB] = useState([]);
  const [mensaje, setMensaje] = useState();

  const traerUnMensaje = (id) => {
    mensajeLeido({id})
    let msj = mensajesDB.find((item) => item.id === id);
    setMensaje(msj);
  };

  const obtenerFecha = (data) => new Date(data * 1000)

  useEffect(() => {
    setMensajesDB(mensajes);
  }, [mensajes]);

  return (
    <Container id="mensajeria">
      <Row className="justify-content-end my-2 mx-0" >
        <Link to="/admin" className="px-2"><Button><FiEdit/></Button></Link>
        <Button onClick={() => app.auth().signOut()} variant="danger"><FiLogOut/></Button>
      </Row>

      <h2 className="py-3">Mensajería</h2>

      <Row xs={2} className="justify-content-center border ">
        <Col xs={4} className="border py-3 overflow-auto mensajes">
          {!!mensajesDB &&
            mensajesDB.map((item) => {
              let fechaConvert = obtenerFecha(item.data.fecha.seconds)
              return (
                <Button className="btn-msj" variant="outline-dark" onClick={() => traerUnMensaje(item.id)}>
                  <Toast>
                    <Toast.Header closeButton={false} >
                      <strong className="mr-auto">{item.data.nombre}</strong>
                      <small>
                        {fechaConvert.toLocaleDateString("es-ES")}
                      </small>
                      {
                        item.data.leido && <FiCheckCircle className="mx-2" style={{"color": "green"}} />
                      }
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
