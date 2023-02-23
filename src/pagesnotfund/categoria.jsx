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
import React, { useState, useEffect } from "react";
import { db } from "../api-firebase";
import slugify from "slugify";

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
    const slug = slugify(categoria, { lower: true });
    const guardarcategoria = { categoria: categoria, slug: slug };
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
      <div>categoria</div>
      <div>
        <form onSubmit={handleinput}>
          <input
            type="text"
            id="categoria"
            placeholder=" Ingrese Categoria"
            required
            value={inputcategoria}
            onChange={handlecategoria}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
      <div>
        {obtenercategoria &&
          obtenercategoria.map((cat) => (
            <ul key={cat.id} className="mt-5">
              <div>categoria: {cat.categoria}</div>

              <button
                onClick={() => {
                  eliminarcategoria(cat.id);
                }}
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
