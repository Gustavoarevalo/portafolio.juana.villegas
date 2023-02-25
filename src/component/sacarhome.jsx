import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api-firebase";

const Sacarhome = () => {
  const [obtenerimagen, setObtenerimagen] = useState(null);

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

  return (
    <>
      <div>
        <div className=" mt-12 ">
          <div className="columns-1 sm:columns-5 mb-28 gap-2 space-y-3 ">
            {obtenerimagen &&
              obtenerimagen.map((home) => (
                <p key={home.id} className="bg-amarillo p-2 hover:shadow-lg">
                  <img
                    src={home.imagen}
                    alt={home.nombre}
                    className="break-inside-avoid w-64 "
                  />
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sacarhome;
