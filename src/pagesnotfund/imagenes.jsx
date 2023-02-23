import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../api-firebase";

const Imagenes = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const storage = getStorage();

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Subir imagen a Firebase Storage
    if (!archivo) {
      setMensaje("Por favor seleccione un archivo");
      return;
    }

    const storageRef = ref(storage, `imagenes/${archivo.name}`);
    await uploadBytes(storageRef, archivo);

    // Obtener la URL de descarga de la imagen en Firebase Storage
    const downloadURL = await getDownloadURL(storageRef);

    // Guardar datos en Firestore
    const colRef = collection(db, "imagenes");
    await addDoc(colRef, { nombre, categoria, imagen: downloadURL });

    // Limpiar campos del formulario
    setNombre("");
    setCategoria("");
    setArchivo(null);
    setMensaje("Imagen subida correctamente");
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
          <input
            type="text"
            id="categoria"
            value={categoria}
            onChange={handleCategoria}
          />
        </div>
        <div>
          <label htmlFor="archivo">Archivo:</label>
          <input type="file" id="archivo" onChange={handleArchivo} />
        </div>
        <button type="submit">Subir Imagen</button>
      </form>
    </>
  );
};

export default Imagenes;
