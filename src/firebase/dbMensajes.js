import {useEffect, useState, createContext} from "react";
import Mensajeria from "../pages/Mensajeria";

import {getFirestore} from "./client";

export const MensajeriaContext = createContext();

const db = getFirestore();

export const MensajesProvider = ({children}) => {
    const [mensajes, setMensajes] = useState([]);

    const traerMensajes = () => {
        const docRef = db.collection('mensajes')

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