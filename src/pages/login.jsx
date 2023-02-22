import { useState } from "react";
import Logueado from "../pagesnotfund/logueado";
import Loguear from "../pagesnotfund/loguear";
import { auth } from "../api-firebase";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [login, setlogin] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setlogin(usuarioFirebase);
    } else {
      setlogin(null);
    }
  });

  return <>{login ? <Logueado /> : <Loguear />}</>;
};

export default Login;
