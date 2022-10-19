import React from 'react'
import { useSelector } from "react-redux";

function Profile() {
  const userState = useSelector((state) => state.user.value);
  const colorState = useSelector((state) => state.color.value);
  return (
    <div style={{color: colorState}}>
        <h1>Profile Page</h1>
        <p>Name: {userState.name}</p>
        <p>Email: {userState.email} </p>
        <p>Age: {userState.age}</p>
        <p>Hobby:{userState.hobby}</p>
    </div>
  )
}

export default Profile