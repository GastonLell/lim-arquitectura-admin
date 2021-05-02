import {useEffect, useState, createContext} from "react";
import Mensajeria from "../pages/Mensajeria";

import {getFirestore} from "./client";

export const MensajeriaContext = createContext();

const db = getFirestore();

export const MensajesProvider = ({children}) => {
    const [mensajes, setMensajes] = useState([]);

    const traerMensajes = () => {
        let docRef = db.collection('mensajes').orderBy("fecha", "desc")

        docRef.get().then((result) => {

            let arrMensajes = [];

            result.forEach(doc => {
                arrMensajes.push({data: doc.data(), id: doc.id})
            });
            setMensajes(arrMensajes);

        }).catch((err) => {
            console.log("error al obtener mensajes en context")
        });
    }

    useEffect(() => {
        traerMensajes();
    }, []);
    
    return(
        <MensajeriaContext.Provider value={{mensajes}}>
            {children}
        </MensajeriaContext.Provider>
    )
}

export const mensajeLeido = ({id}) => {

    let docRef = db.collection('mensajes').doc(id);

    return docRef.update({
        leido: true
    })
    .then(() => console.log("mensaje leido"))
    .catch(err => console.log(err))
    
}