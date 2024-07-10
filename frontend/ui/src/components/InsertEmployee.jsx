import React, { useState } from 'react'
import './InsertEmployee.css'
import axios from 'axios'


const InsertEmployee = () => {
    //manage state
    const [employeeData, setEmployeedata] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        position:"",
        salary:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;    
        setEmployeedata({
           ...employeeData,
            [name]: value,
        });
        console.log(employeeData);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/api/employees",employeeData).then(()=>{
            console.log("Employee added successfully");
            setEmployeedata({
                name:"",
                email:"",
                phone:"",
                address:"",
                position:"",
                salary:""
            });
        })
    };    

  return (
    <div>
       <form onSubmit={handleSubmit} class="form-container">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={employeeData.name}/>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" onChange={handleChange} value={employeeData.email}/>

        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" onChange={handleChange} value={employeeData.phone}/>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" onChange={handleChange} value={employeeData.address}/>

        <label for="position">Position:</label>
        <input type="text" id="position" name="position" onChange={handleChange} value={employeeData.position}/>

        <label for="salary">Salary:</label>
        <input type="text" id="salary" name="salary" onChange={handleChange} value={employeeData.salary}/>

        <button type="submit" class="full-width">Submit</button>
    </form>
    </div>
  )
}

export default InsertEmployee
