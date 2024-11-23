import {FaUser,FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
const Login = () => {
  
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(username,Password)
    console.log("Envio");
  };

  return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>acesse o sistema</h1>

          <div>
            <input type="Email" placeholder='Email de Login'
            onChange={(e) => setUsername(e.target.value)}  />
            
            <FaUser className="icon" /> 
          </div>

          <div>
            <input type="Password" placeholder='Senha de Login'
            onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
          </div>

          <div 
          className="reacll-forget">
            <label>
              <input type="checkbox" />
              Continuar Conectado
            </label>
          <a href="#">Esqueceu a senha?</a>
          </div>

          <button>Entrar</button>
      
        </form>
      </div> 
  )
}

export default Login
