import firebase from "firebase"
import {getFirestore} from "../firebase/client";


import { Form, Col, Button } from "react-bootstrap";
import {useState, useEffect } from "react";
const db = getFirestore();

const FormAdmin = () => {
  
  const [post, setPost] = useState({
    nombre: "",
    categoria: "",
    file: ""
  });

  const handleCreatePost = async (e) => {
    
    e.preventDefault();

    let idImagen;
    
    const user = firebase.auth().currentUser;
    if(user == null){
      alert("debe estar registrado para realizar el post")
      return
    }

    await db.collection('proyectos').add({
      nombre: post.nombre,
      categoria: post.categoria,
      srcImagen: post.file.name,
      fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(refDoc => {
      console.log(refDoc.id)
      idImagen = refDoc.id;
    })
    .catch(err => console.log(`error al enviar documentos a firebase ${err}`))

    const refStorage = await firebase.storage().ref(`proyectos/${idImagen}/${post.file.name}`)
     await refStorage.put(post.file).then(
      snapshot => console.log(snapshot)
    )
  }

  const handleChangue = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
    if(e.target.name == "file"){
      setPost({
        ...post,
        file: e.target.files[0]
      })
    }
    
  }


  return (
    <Form onSubmit={handleCreatePost} md={6} >
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control onChange={handleChangue} name="nombre" type="text" placeholder="Ingrese el nombre..." />
      </Form.Group>
      <Form.Group>
        <Form.Control onChange={handleChangue} name="categoria" as="select">
          <option selected>Seleccione categoria</option>
          <option value="renders">Renders</option>
          <option value="videos">Videos</option>
          <option value="realidad">Realidad Virtual</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.File onChange={handleChangue} name="file" id="exampleFormControlFile1" />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
};
export default FormAdmin;