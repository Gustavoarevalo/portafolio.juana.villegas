import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../api-firebase";

const Mensajes = () => {
  const [mensajes, setMensajes] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      const colRef = collection(db, "contactos");
      const result = await getDocs(query(colRef));
      const mensajes = result.docs.map((doc) => doc.data());
      setMensajes(mensajes);
    };
    getItems();
  }, []);
  return (
    <>
      <h1 className="mt-10">mensajes</h1>
      <ul className="mt-10">
        {mensajes &&
          mensajes.map((mensaje) => (
            <li key={mensaje.fecha} className="mt-5">
              <div>Asunto: {mensaje.asunto}</div>
              <div>Correo: {mensaje.cell}</div>
              <div>Nombre: {mensaje.nombre}</div>
              <div>Texto: {mensaje.texto}</div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Mensajes;
