import React, { useState } from "react";
import Modal from "../component/modal.";

const Formulario = (props) => {
  const [estadomodal, cambiarestadomodal] = useState(false);
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
      <div>
        <div className="mt-10 lg:mt-24">
          <input
            className="w-48 lg:w-96 h-8"
            type="text"
            placeholder="   Name"
            name="nombre"
            onChange={handleinput}
            value={values.nombre}
          />
        </div>
        <div className="mt-1">
          <input
            className="w-48 lg:w-96 h-8"
            type="text"
            placeholder="   Mail"
            onChange={handleinput}
            name="cell"
            value={values.cell}
          />
        </div>
        <div className="mt-1">
          <input
            className="w-48 lg:w-96 h-8"
            type="text"
            placeholder="   Affair"
            onChange={handleinput}
            name="asunto"
            value={values.asunto}
          />
        </div>
        <div className="mt-1">
          <textarea
            cols="30"
            rows="10"
            className="w-48 lg:w-96 h-48"
            type="text"
            placeholder="   Write your message here"
            onChange={handleinput}
            name="texto"
            value={values.texto}
          ></textarea>
        </div>
        <button
          className="bg-white mt-8 ml-14 lg:ml-36 px-4 py-2 rounded-lg hover:bg-green-500"
          onClick={() => cambiarestadomodal(!estadomodal)}
        >
          Send
        </button>
        <Modal
          open={estadomodal}
          close={cambiarestadomodal}
          titulo={values.nombre}
        >
          <h3 className="text-left">Message Sent</h3>
        </Modal>
      </div>
    </form>
  );
};

export default Formulario;
