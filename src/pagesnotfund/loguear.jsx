import { auth } from "../api-firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Loguear = () => {
  async function handlesubmit(e) {
    e.preventDefault();
    const correo = e.target.correo.value;
    const password = e.target.contraseña.value;
    signInWithEmailAndPassword(auth, correo, password);
  }
  return (
    <>
      <h1>iniciar seccion</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="correo">Correo</label>
        <input type="text" id="correo" />
        <label htmlFor="contraseña">Password</label>
        <input type="password" id="contraseña" />
        <button type="submit">Inicir Seccion </button>
      </form>
    </>
  );
};

export default Loguear;
