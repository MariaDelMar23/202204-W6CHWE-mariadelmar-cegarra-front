import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const emptyForm = {
    name: "",
    password: "",
  };
  const dispatch = useDispatch()
  const [formData, setformData] = useState(emptyForm);

  const changeForm = (event) =>{
    setformData({...formData, [event.target.id]: event.target.value})
  }

  

  return (
    <form action="login" autoComplete="off" noValidate>
      <label htmlFor="name"></label>
      <input id="name" type="text" onChange={changeForm} />
      <label htmlFor="password"></label>
      <input id="password" type="text" onChange={changeForm} />
      <input type="submit" value="LOG IN" onClick={} />
    </form>
  );
};

export default LoginForm;
