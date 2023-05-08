import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App(){
  return(
    <div className="form">
      <div className="exel"><h1>This is my form</h1></div>
      <form action="">
        <label htmlFor="FirstName" className="form-group">FirstName</label>
        <input type="text" name="firstName" id="firstName" className="form-control"/>
        <label htmlFor="lastname" className="form-group">lastname</label>
        <input type="text" name="lastname" id="lastname" className="form-control"/>
        <label htmlFor="Email" className="form-group">Email</label>
        <input type="email" name="Email" id="Email" className="form-control"/>
        <label htmlFor="password" className="form-group">password</label>
        <input type="password" name="password" id="password" className="form-control"/>
        <br />
        <label htmlFor="Gender">Gender</label>
        <select name="Gender" id="Gender">
          <option value="choose Gender">Male</option>
          <option value="choose Gender">feMale</option>

        </select>
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}


export default App;
