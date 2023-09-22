import { useState } from "react";
import './App.css';
import Users from './users'
import DropSelection from './components/DropSelection'
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[users, setUsers] = useState([
    {name: "test1", age: "21"},
    {name: "test2", age: "22"},
    {name: "test3", age: "22"},
    {name: "test4", age: "24"},
  ]);

  const getFilteredData=()=>{
    const newFilteredData = [];
      users.filter((user)=>{
      if(user.age == "22"){
        newFilteredData.push(user);
      }
    });
    setUsers(newFilteredData);
  }

  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    age:""
  })

  const[validationError, setValidationError]=useState("");

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!formData.firstName){
      setValidationError("Validation Failed");
    }
    else{
      setValidationError("");
    }
  }
  return (
    <div className="App">
      <div className="userInfo">
        {users.map((user)=>{
          return(
          <Users 
          key = {uuidv4()}
          name = {user.name}
          age = {user.age}/>
          )
        })}
      </div>
      <button onClick={getFilteredData}>Filter Data</button>
      <br/>
      <DropSelection />
    </div>
    // <div className="App">
    //   <form style={{width: 100}}>
    //       <label>
    //         First Name
    //         <input name="firstName" type="textbox" placeholder="First Name" value={formData.firstName} onChange={handleChange}></input>
    //       </label>
    //       <label>
    //         Last Name
    //         <input name="lastName" type="textbox" placeholder="Last Name" value={formData.lastName} onChange={handleChange}></input>
    //       </label>
    //       <label>
    //         Email
    //         <input name="email" type="textbox" placeholder="Email" value={formData.email} onChange={handleChange}></input>
    //       </label>
    //       <label>
    //         Address
    //         <input name="address" type="textbox" placeholder="Address" value={formData.address} onChange={handleChange}></input>
    //       </label>
    //       <label>
    //         Age
    //         <input name="age" type="textbox" placeholder="Age" value={formData.age} onChange={handleChange}></input>
    //       </label>
    //       <button onClick={handleSubmit}>Submit</button>
    //       {validationError && <span>{validationError}</span>}
    //   </form>
    // </div>
  );
}

export default App;
