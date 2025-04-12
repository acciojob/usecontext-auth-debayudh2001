
import React, { useContext } from "react";
import './../styles/App.css';
import { AuthContext } from "../../authContext";

const App = () => {
  const {isAuthenticated, handleChange} = useContext(AuthContext)
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {isAuthenticated !== true ? <p>you are not authenticated</p> : <p className="authText">You are now authenticated, you can proceed</p>}
      <input type="checkbox" onChange={handleChange} />&nbsp;
      <span>I'm not a robot</span>
    </div>
  )
}

export default App
