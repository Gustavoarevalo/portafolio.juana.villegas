import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, app } from "../api-firebase";
import { v4 } from "uuid";
import slugify from "slugify";

const Imagenes = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState("");
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

  const handleArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };

  // Subir imagen a Firebase Storage
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir imagen a Firebase Storage
    if (!archivo) {
      setMensaje("Por favor seleccione un archivo");
      return;
    }

    const storageRef = ref(storage, `imagenes/${idinterno}`);
    await uploadBytes(storageRef, archivo);

    // Obtener la URL de descarga de la imagen en Firebase Storage
    const downloadURL = await getDownloadURL(storageRef);

    // Guardar datos en Firestore
    const colRef = collection(db, "imagenes");
    await addDoc(colRef, {
      nombre,
      categoria,
      imagen: downloadURL,
      idinterior: idinterno,
      fecha: new Date().toLocaleString(),
    });

    // Limpiar campos del formulario
    setNombre("");
    setCategoria("");
    setArchivo(null);
    setMensaje("Imagen subida correctamente");

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
      {mensaje && <p>{mensaje}</p>}
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
          <select id="categoria" value={categoria} onChange={handleCategoria}>
            <option value="">Seleccione una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.categoria}>
                {cat.categoria}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="archivo">Archivo:</label>
          <input type="file" id="archivo" onChange={handleArchivo} />
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

export default Imagenes;
