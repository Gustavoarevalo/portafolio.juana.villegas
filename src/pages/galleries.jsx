import React, { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../api-firebase";
import _ from "lodash";

const Gallery = () => {
  const [categorias, setCategorias] = useState(null);

  const sacarUltimasImagenesPorCategoria = async () => {
    const q = query(
      collection(db, "imagenes"),
      orderBy("fecha", "desc") // ordenar por fecha de creación (la última imagen primero)
    );
    const result = await getDocs(q);
    const agrupadasPorCategoria = _.groupBy(
      result.docs.map((doc) => doc.data()),
      "categoria"
    );
    const ultimasImagenesPorCategoria = Object.keys(agrupadasPorCategoria).map(
      (categoria) => {
        const imagenesDeCategoria = agrupadasPorCategoria[categoria];
        const ultimaImagen = imagenesDeCategoria[0];
        return {
          categoria,
          imagen: ultimaImagen.imagen,
          nombre: ultimaImagen.nombre,
        };
      }
    );
    setCategorias(ultimasImagenesPorCategoria);
  };

  useEffect(() => {
    sacarUltimasImagenesPorCategoria();
  }, []);

  return (
    <>
      <div>
        <div className="grid gap-x-8 gap-y-4 grid-cols-5 mt-12 ">
          {categorias &&
            categorias.map((img) => (
              <ul key={img.categoria}>
                <p>{img.categoria}</p>
                <img src={img.imagen} alt={img.nombre} />
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
