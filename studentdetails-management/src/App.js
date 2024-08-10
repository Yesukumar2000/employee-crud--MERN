import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeDetails />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// // import {BroswerRoutes as Router, Routes, Route} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import StudentDetails from './studentcomponents/StudentDetails';
// import AddStudent from './studentcomponents/AddStudent';
// import UpdateStudent from './studentcomponents/UpdateStudent';

// function App() {
//   return (
//   <>
//     <Router>
//       <Routes>
//         <Route path='/' element={<StudentDetails/>} />
//         <Route path='/AddStudent' element={<AddStudent />} />
//         <Route path='/update/student/:id' element={<UpdateStudent />} />
//       </Routes>
//     </Router>
//   </>
//   );
// }

// export default App;
