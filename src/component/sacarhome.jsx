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
        <div className="grid gap-x-8 gap-y-4 grid-cols-5 mt-12 ">
          {obtenerimagen &&
            obtenerimagen.map((home) => (
              <p key={home.id} className="">
                <img
                  src={home.imagen}
                  alt={home.nombre}
                  className="w-64 hover:shadow-md"
                />
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sacarhome;
