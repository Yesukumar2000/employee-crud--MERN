import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [mobileNo, setMobileNo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { firstName, lastName, age, gender, mobileNo };
    try {
      await axios.post("http://localhost:8000/api/employees", newEmployee);
      alert("Employee Added Successfully");
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <label>
          FirstName:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <label>
          LastName:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          Gender:
          <input type="radio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} required />
          <span>Male</span>
          <input type="radio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} required />
          <span>Female</span>
        </label>
        <label>
          MobileNo:
          <input type="number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
        <button onClick={()=>{
            navigate('/');
        }}>Back</button>
      </form>
    </div>
  );
}

export default AddEmployee;