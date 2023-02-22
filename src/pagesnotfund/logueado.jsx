import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../api-firebase";
import Categoria from "./categoria";
import Imagenes from "./imagenes";
import Mensajes from "./vermensajes";

const Logueado = () => {
  const [mostrarComponente1, setMostrarComponente1] = useState(false);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);
  const [mostrarComponente3, setMostrarComponente3] = useState(false);

  const handleClickComponente1 = () => {
    setMostrarComponente1(true);
    setMostrarComponente2(false);
    setMostrarComponente3(false);
  };

  const handleClickComponente2 = () => {
    setMostrarComponente1(false);
    setMostrarComponente2(true);
    setMostrarComponente3(false);
  };

  const handleClickComponente3 = () => {
    setMostrarComponente1(false);
    setMostrarComponente2(false);
    setMostrarComponente3(true);
  };

  return (
    <>
      <div className="mt-10">
        <button
          className="bg-transparent hover:bg-azulreal text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClickComponente1}
        >
          categoria
        </button>
        <button
          className="ml-10 bg-transparent hover:bg-azulreal text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClickComponente2}
        >
          imagenes
        </button>

        <button
          className="ml-10 bg-transparent hover:bg-azulreal text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleClickComponente3}
        >
          mensajes
        </button>
        {mostrarComponente1 && <Categoria />}
        {mostrarComponente2 && <Imagenes />}
        {mostrarComponente3 && <Mensajes />}
      </div>
      <div>
        <button
          className="bg-black w-24 h-12 md-redonded text-white ml-24 mt-5"
          onClick={() => signOut(auth)}
        >
          cerrar seccion
        </button>
      </div>
    </>
  );
};

export default Logueado;
