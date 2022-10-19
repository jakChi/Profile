import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from "../Reducers.js/UserLogin";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => {
            dispatch(login({name: "Jakob", email: "koba@gmail.com", age: 19, hobby: "coding"}))
          }}>
          Login
        </button>
        <button onClick={() => {
            dispatch(logout())
          }}>
          Logout
        </button>
    </div>
  )
}

export default Login;