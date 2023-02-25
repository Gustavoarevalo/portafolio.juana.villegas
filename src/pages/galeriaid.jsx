import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../api-firebase";
import _ from "lodash";
import { useState, useEffect } from "react";

const Galeriaid = () => {
  const id = useParams().categoria;
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
    <main className="ml-1 lg:ml-96">
      <h1 className="font-juana text-black font-bold text-xl  mt-12 text-center ">
        Imágenes por categoría
      </h1>
      <div className="columns-1 sm:columns-5 mb-28 gap-2 space-y-3 mt-12 ">
        {imagenes &&
          imagenes.map((imagen) => (
            <p key={imagen.id} className="bg-amarillo p-2 hover:shadow-lg">
              <img
                src={imagen.imagen}
                alt={imagen.nombre}
                className="break-inside-avoid w-96 sm:w-64 "
              />
            </p>
          ))}
      </div>
    </main>
  );
};

export default Galeriaid;
