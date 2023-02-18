import React, { useState } from "react";
import Formulario from "./formulario";
import { db } from "../api-firebase";
import { collection, addDoc } from "firebase/firestore";
import Modal from "../component/modal.";

const Linkformulario = () => {
  const [estadomodal, cambiarestadomodal] = useState(false);
  const [contactoAgregado, setContactoAgregado] = useState(null);

  const addtask = async (linkObject) => {
    const colRef = collection(db, "contactos");
    const docRef = await addDoc(colRef, linkObject);
    setContactoAgregado({
      id: docRef.id,
      ...linkObject,
    });
    cambiarestadomodal(true);
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
          <p>{contactoAgregado.nombre}</p>
        </Modal>
      )}
    </>
  );
};
export default Linkformulario;
