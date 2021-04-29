//REACT
import { useState, useCallback } from "react";

//FIREBASE
import firebase from "firebase";
import { getFirestore } from "../firebase/client";
import {getProject} from '../firebase/getProject';

//BOOTSTRAP
import { Form, Row, Col, Button, Alert, ProgressBar } from "react-bootstrap";

const FormAdmin = () => {

  const [progress, setProgress] = useState({
    mensaje: "",
    porcentaje: null,
  });

  const handlePost = async (event) => {
    event.preventDefault();

    const { nombre, categoria, file } = event.target.elements;

      
        const refStorage = await firebase.storage().ref(`${file.files[0].name}`);

        const task = refStorage.put(file.files[0]);

        task.on("state_changed", (snapshot) => {
          let porcentajeActual = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress({
              ...progress,
              porcentaje: porcentajeActual,
            });
        }, (error) => {
            setProgress({
              ...progress,
              mensaje: "error al cargar imagen. Por favor, intentelo nuevamente",
            });
        }, () => {
          setProgress({
            ...progress,
            mensaje: "Imagen cargada",
          })
      });

      await task.then(data => {
        data.ref.getDownloadURL().then(url => {
          let imagenUrl = url;
          getProject({nombre, categoria, imagenUrl})
        })
      })

  }

  const handleResetForm = () => {
    document.getElementById("formAdmin").reset();
    setProgress({
      mensaje: "",
      porcentaje: null,
    })
  }
  return (
    <>
      <Col>
      {
        progress.porcentaje > 0 && (
          <ProgressBar now={progress.porcentaje} striped variant="dark" label={`${progress.porcentaje}%`} />
        )
      }
        <Form id="formAdmin" onSubmit={handlePost}>
          <Form.Group>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Ingrese el nombre..."
              className="my-4"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control name="categoria" as="select" className="my-4" required>
              <option selected>Seleccione categoria</option>
              <option value="renders">Renders</option>
              <option value="videos">Videos</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.File name="file" className="my-4" required/>
          </Form.Group>
          <Row className="justify-content-end m-0">
            <Button
              variant="dark"
              onClick={handleResetForm}
              className="my-2 mx-2"
            >
              Reset
            </Button>
            <Button
              variant="outline-dark"
              type="submit"
              className="my-2"
            >
              Guardar
            </Button>
          </Row>
        </Form>
        {
          progress.mensaje && (
            <Alert variant="dark">
              {progress.mensaje}
            </Alert>
          )
        }

      </Col>
    </>
  );
};
export default FormAdmin;