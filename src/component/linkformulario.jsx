import React from "react";
import Formulario from "./formulario";
import { db } from "../api-firebase";
import { collection, addDoc } from "firebase/firestore";

const Linkformulario = () => {
  const addtask = async (linkObject) => {
    const colRef = collection(db, "contactos");
    await addDoc(colRef, linkObject);
  };

  return (
    <>
      <Formulario addedit={addtask} />
    </>
  );
};
export default Linkformulario;
