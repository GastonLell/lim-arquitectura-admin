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

    let imageDownloadUrl;

    const user = firebase.auth().currentUser;
    if(user == null){
      alert("debe estar registrado para realizar el post")
      return
    }
    if(!!post.file){
      const refStorage = await firebase.storage().ref(`proyectos/${post.file.name}`)

      await refStorage.put(post.file).then(() => console.log("imagen en storage"))
      .catch(err => console.log(err))

      await refStorage.getDownloadURL().then(url => {
        imageDownloadUrl = url;
      })
    }
    await db.collection('proyectos').add({
      nombre: post.nombre,
      categoria: post.categoria,
      srcImagen: imageDownloadUrl,
      fecha: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(refDoc => {
      console.log(refDoc.id)
    })
    .catch(err => console.log(`error al enviar documentos a firebase ${err}`))


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