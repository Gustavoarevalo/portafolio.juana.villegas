import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { db, app } from "../api-firebase";
import { v4 } from "uuid";
import slugify from "slugify";

const Pruebas = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [obtenerimagen, setObtenerimagen] = useState(null);

  const storage = getStorage(app);
  const idinterno = v4();

  const sacarimagenes = async () => {
    const querySnapshot = collection(db, "imagenes");
    const result = await getDocs(querySnapshot);
    const imagenes = result.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setObtenerimagen(imagenes);
  };

  useEffect(() => {
    sacarimagenes();
  }, []);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const querySnapshot = collection(db, "categorias");
      const result = await getDocs(querySnapshot);
      const categorias = result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCategorias(categorias);
    };

    obtenerCategorias();
  }, []);

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleUrl = (e) => {
    setImagen(e.target.value);
  };

  // Subir imagen a Firebase Storage
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir imagen a Firebase Storage

    // Guardar datos en Firestore
    const colRef = collection(db, "imagenes");
    const slug = slugify(categoria, { lower: true });
    await addDoc(colRef, {
      nombre,
      categoria,
      imagen,
      idinterior: idinterno,
      fecha: new Date().toLocaleString(),
      slug: slug,
    });

    // Limpiar campos del formulario
    setNombre("");
    setCategoria("");
    setImagen("");

    sacarimagenes();
  };

  //eliminar imagenes
  const eliminarimagen = async (id, nombreImagen) => {
    // Eliminar imagen de Firebase Storage
    console.log(id);
    const storageRef = ref(storage, `imagenes/${nombreImagen}`);

    await deleteObject(storageRef);

    // Eliminar datos de Firestore
    const docRef = doc(db, "imagenes", id);
    await deleteDoc(docRef);

    // Actualizar el estado con las imágenes actualizadas
    const updatedImagenes = obtenerimagen.filter((img) => img.id !== id);
    setObtenerimagen(updatedImagenes);
  };
  return (
    <>
      <h1>Subir Imagen</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombre}
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={handleCategoria}
            required
          >
            <option value="">Seleccione una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.categoria}>
                {cat.categoria}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="nombre">Url:</label>
          <input
            type="text"
            id="nombre"
            value={imagen}
            onChange={handleUrl}
            required
          />
        </div>
        <button type="submit">Subir Imagen</button>
      </form>

      <div>
        {obtenerimagen &&
          obtenerimagen.map((cat) => (
            <ul key={cat.id} className="mt-5">
              <div>titulo: {cat.nombre}</div>
              <div>categoria: {cat.categoria}</div>

              <button
                onClick={() => {
                  eliminarimagen(cat.id, cat.idinterior);
                }}
              >
                Eliminar Imagen
              </button>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Pruebas;
