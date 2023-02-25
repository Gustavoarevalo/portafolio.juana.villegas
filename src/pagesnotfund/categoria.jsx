import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../api-firebase";

const Categoria = () => {
  const colRef = collection(db, "categorias");
  const [inputcategoria, setinputcategoria] = useState("");
  const [obtenercategoria, setObtenercategoria] = useState(null);

  //eliminar las categorias
  const eliminarcategoria = async (id) => {
    const docRef = doc(db, "categorias", id);
    await deleteDoc(docRef);
    const updatedcategoria = obtenercategoria.filter((cat) => cat.id !== id);
    setObtenercategoria(updatedcategoria);
  };

  //ingresar a la base de datos
  const handleinput = async (e) => {
    e.preventDefault();
    const categoria = e.target.categoria.value;

    const guardarcategoria = { categoria: categoria };
    await addDoc(colRef, guardarcategoria);
    setinputcategoria("");
    getItems();
  };
  //reiniciar el input para poner los valores vacios
  const handlecategoria = (e) => {
    setinputcategoria(e.target.value);
  };
  //obtener datos de la base de datos
  const getItems = async () => {
    const result = await getDocs(colRef);
    const resultados = result.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setObtenercategoria(resultados);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="font-juana text-black font-semibold text-xl mt-8">
        categoria
      </div>
      <div className="mt-8">
        <form onSubmit={handleinput}>
          <input
            type="text"
            id="categoria"
            placeholder=" Ingrese Categoria"
            required
            value={inputcategoria}
            onChange={handlecategoria}
            className="border-4 border-azul h-12"
          />
          <button
            type="submit"
            className="bg-turqueza p-2 rounded-md font-juana text-white font-semibold hover:bg-azul ml-2"
          >
            Guardar
          </button>
        </form>
      </div>
      <div className="mt-12">
        {obtenercategoria &&
          obtenercategoria.map((cat) => (
            <ul key={cat.id} className="mt-5">
              <div>categoria: {cat.categoria}</div>

              <button
                onClick={() => {
                  eliminarcategoria(cat.id);
                }}
                className="bg-rojopuro p-2 rounded-md font-juana text-white font-semibold hover:bg-rojooscuro"
              >
                eliminar categoria
              </button>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Categoria;
