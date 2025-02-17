import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const name = useRef();
  const password = useRef(); 
  let navigate = useNavigate()
  let demo=()=>{
    name.current.value ==="admin" && password.current.value === "admin@123" ?
    navigate("/dashboard") : navigate ("/error")
  }
  return (
    <div>
      <form action="">
        Name: <input type="text" name="name" id="name" ref={name} />
        <br/>
        Password: <input type="password" name="password" id="password" ref={password} />
        <br/>
        <button onClick={demo}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
