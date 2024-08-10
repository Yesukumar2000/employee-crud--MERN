import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetails() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/employees");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/employees/${id}`);
      alert("Employee Deleted Successfully");
      fetchDataFromServer();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-employee/${id}`);
  };

  return (
    <div>
      <h1>Employee Details Table</h1>
      <button onClick={() => navigate("/add-employee")}>Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.mobileNo}</td>
              <td>
                <button onClick={() => handleUpdate(employee._id)}>Update</button>
                <button onClick={() => handleDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDetails;