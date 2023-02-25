import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../api-firebase";
import Categoria from "./categoria";
import Imagenes from "./imagenes";
import Mensajes from "./vermensajes";
import Pruebas from "./pruebas";

const Logueado = () => {
  const [mostrarComponente1, setMostrarComponente1] = useState(false);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);
  const [mostrarComponente3, setMostrarComponente3] = useState(false);
  const [mostrarComponente4, setMostrarComponente4] = useState(false);

  const handleClickComponente1 = () => {
    setMostrarComponente1(true);
    setMostrarComponente2(false);
    setMostrarComponente3(false);
    setMostrarComponente4(false);
  };

  const handleClickComponente2 = () => {
    setMostrarComponente1(false);
    setMostrarComponente2(true);
    setMostrarComponente3(false);
    setMostrarComponente4(false);
  };

  const handleClickComponente3 = () => {
    setMostrarComponente1(false);
    setMostrarComponente2(false);
    setMostrarComponente3(true);
    setMostrarComponente4(false);
  };

  const handleClickComponente4 = () => {
    setMostrarComponente1(false);
    setMostrarComponente2(false);
    setMostrarComponente3(false);
    setMostrarComponente4(true);
  };

  return (
    <>
      <div className="mt-10 ml-96">
        <button
          className="bg-transparent hover:bg-azul text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClickComponente1}
        >
          categoria
        </button>
        <button
          className="ml-10 bg-transparent hover:bg-azul text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClickComponente2}
        >
          imagenes
        </button>

        <button
          className="ml-10 bg-transparent hover:bg-azul text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClickComponente3}
        >
          mensajes
        </button>

        <button
          className="ml-10 bg-transparent hover:bg-azul text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClickComponente4}
        >
          pruebas
        </button>

        <button
          className="bg-rojopuro p-2 rounded-md font-juana text-white font-semibold hover:bg-rojooscuro ml-12"
          onClick={() => signOut(auth)}
        >
          cerrar seccion
        </button>

        {mostrarComponente1 && <Categoria />}
        {mostrarComponente2 && <Imagenes />}
        {mostrarComponente3 && <Mensajes />}
        {mostrarComponente4 && <Pruebas />}
      </div>
    </>
  );
};

export default Logueado;
