import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../api-firebase";
import _ from "lodash";
import { useState, useEffect } from "react";

const Galeriaid = () => {
  const id = useParams().categoria;
  console.log(id);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const obtenerImagenes = async () => {
      const q = query(collection(db, "imagenes"), where("categoria", "==", id));
      const result = await getDocs(q);
      setImagenes(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    obtenerImagenes();
  }, []);

  return (
    <>
      <h1>Imágenes de la categoría {id}</h1>
      <div>
        {imagenes &&
          imagenes.map((imagen) => (
            <img src={imagen.imagen} alt={imagen.nombre} key={imagen.id} />
          ))}
      </div>
    </>
  );
};

export default Galeriaid;
