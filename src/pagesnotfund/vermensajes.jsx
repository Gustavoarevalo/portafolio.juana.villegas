import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  doc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../api-firebase";

const Mensajes = () => {
  const [mensajes, setMensajes] = useState(null);

  const eliminarMensaje = async (id) => {
    const docRef = doc(db, "contactos", id);
    await deleteDoc(docRef);
    const updatedMensajes = mensajes.filter((mensaje) => mensaje.id !== id);
    setMensajes(updatedMensajes);
  };

  const getItems = async () => {
    const colRef = collection(db, "contactos");
    const queryRef = query(colRef, orderBy("id", "desc"));
    const result = await getDocs(queryRef);
    console.log(result.docs);
    const resultados = result.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .reverse();
    setMensajes(resultados);
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <h1 className="mt-10">Mensajes</h1>
      <ul className="mt-10">
        {mensajes &&
          mensajes
            .map((mensaje) => (
              <li key={mensaje.id} className="mt-5">
                <div>Asunto: {mensaje.asunto}</div>
                <div>Correo: {mensaje.cell}</div>
                <div>Nombre: {mensaje.nombre}</div>
                <div>Texto: {mensaje.texto}</div>
                <button
                  onClick={() => {
                    eliminarMensaje(mensaje.id);
                  }}
                >
                  eliminar mensaje
                </button>
              </li>
            ))
            .reverse()}
      </ul>
    </>
  );
};

export default Mensajes;
