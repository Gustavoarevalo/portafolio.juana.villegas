import React, { useState } from "react";
import "../App.css";

const Formulario = (props) => {
  const inicialvalues = {
    nombre: "",
    cell: "",
    texto: "",
    asunto: "",
  };
  const [values, setvalue] = useState(inicialvalues);

  const handleinput = (e) => {
    const { name, value } = e.target;
    setvalue({ ...values, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    props.addedit(values);
    setvalue({ ...inicialvalues });
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="mt-10 lg:mt-24">
        <div className="div">
          <label className="lbl-nombre">
            <span className="text-nomb">Name</span>
            <input
              className="text"
              type="text"
              name="nombre"
              onChange={handleinput}
              value={values.nombre}
              required
            />
          </label>
        </div>
        <div className="div">
          <label className="lbl-nombre">
            <span className="text-nomb">Mail</span>
            <input
              className="text"
              type="text"
              onChange={handleinput}
              name="cell"
              value={values.cell}
              required
            />
          </label>
        </div>
        <div className="div ">
          <label className="lbl-nombre">
            <span className="text-nomb">Affair</span>
            <input
              className="text"
              type="text"
              onChange={handleinput}
              name="asunto"
              value={values.asunto}
              required
            />
          </label>
        </div>
        <div className="div">
          <label className="lbl-nombre">
            <span className="text-nomb">Write your message here</span>
            <textarea
              cols="30"
              rows="10"
              className="text"
              type="text"
              onChange={handleinput}
              name="texto"
              value={values.texto}
              required
            ></textarea>
          </label>
        </div>
        <button
          className="mt-8 ml-14 lg:ml-36 px-4 py-2 rounded-lg bg-turqueza hover:bg-azulreal hover:text-white"
          //  onClick={() => cambiarestadomodal(!estadomodal)}
          onClick={() => addedit(values)}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Formulario;
