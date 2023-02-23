import React, { useState, useEffect } from "react";
import Formulario from "./formulario";
import { db } from "../api-firebase";
import {
  collection,
  addDoc,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import Modal from "../component/modal.";

const Linkformulario = () => {
  const [estadomodal, cambiarestadomodal] = useState(false);
  const [contactoAgregado, setContactoAgregado] = useState(null);
  const [ultimoId, setUltimoId] = useState(0);

  useEffect(() => {
    const obtenerUltimoId = async () => {
      const colRef = collection(db, "contactos");
      const query = orderBy(colRef, "id", "desc");
      const limitQuery = limit(query, 1);
      const querySnapshot = await getDocs(limitQuery);
      querySnapshot.forEach((doc) => {
        setUltimoId(doc.data().id);
      });
    };

    obtenerUltimoId();
  }, []);

  const addtask = async (linkObject) => {
    const nuevoId = ultimoId + 1;
    const linkObjectConId = { id: nuevoId, ...linkObject };
    const colRef = collection(db, "contactos");
    await addDoc(colRef, linkObjectConId);
    setContactoAgregado(linkObjectConId);
    cambiarestadomodal(true);
    setUltimoId(nuevoId);
  };

  return (
    <>
      <Formulario addedit={addtask} />
      {estadomodal && contactoAgregado && (
        <Modal
          open={estadomodal}
          close={() => cambiarestadomodal(false)}
          titulo={contactoAgregado.nombre}
        >
          <h3 className="text-left">Message Send:</h3>
          <p>{contactoAgregado.asunto}</p>
        </Modal>
      )}
    </>
  );
};

export default Linkformulario;
