import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Studen Name: Phurba Dorji Tamang</h1>
      <h1>Studen ID: 101514574</h1>
      <h1>Student Information System</h1>
      <h5>Powered By: moxDroid Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      Developerd By: Phurba Dorji Tamang
      <StudentList students={students} />
    </div>
  );
};

export default App;
