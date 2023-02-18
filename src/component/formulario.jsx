import React, { useState } from "react";

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
      <div className="">
        <div className="mt-10 lg:mt-24">
          <input
            className="w-48 lg:w-96 h-8 border-2 border-turqueza"
            type="text"
            placeholder="   Name"
            name="nombre"
            onChange={handleinput}
            value={values.nombre}
            required
          />
        </div>
        <div className="">
          <input
            className="w-48 lg:w-96 h-8 border-2 border-turqueza"
            type="text"
            placeholder="   Mail"
            onChange={handleinput}
            name="cell"
            value={values.cell}
            required
          />
        </div>
        <div className=" ">
          <input
            className="w-48 lg:w-96 h-8 border-2 border-turqueza"
            type="text"
            placeholder="   Affair"
            onChange={handleinput}
            name="asunto"
            value={values.asunto}
            required
          />
        </div>
        <div className="">
          <textarea
            cols="30"
            rows="10"
            className="w-48 lg:w-96 h-48 border-2 border-turqueza"
            type="text"
            placeholder="   Write your message here"
            onChange={handleinput}
            name="texto"
            value={values.texto}
            required
          ></textarea>
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
