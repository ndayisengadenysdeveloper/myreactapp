
import StudentCardPage from "./pages/StudentCardPage";
import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentForm from "./pages/StudentForm";

import "./App.css";

const initialStudents = [
  {
    id: 1,
    studentName: "Alice Mukamana",
    registrationNumber: "ST001",
    gender: "Female",
    programme: "Software Development",
    email: "alice@gmail.com",
  },
  {
    id: 2,
    studentName: "Eric Niyonzima",
    registrationNumber: "ST002",
    gender: "Male",
    programme: "Software Development",
    email: "eric@gmail.com",
  },
];

function App() {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("students");
      return saved === null
        ? initialStudents
        : JSON.parse(saved);
    } catch {
      return initialStudents;
    }
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function saveStudent(student) {
    setStudents((previous) => {
      const exists = previous.some(
        (item) => item.id === student.id
      );

      if (exists) {
        return previous.map((item) =>
          item.id === student.id ? student : item
        );
      }

      return [...previous, student];
    });
  }

  function deleteStudent(id) {
    setStudents((previous) =>
      previous.filter((student) => student.id !== id)
    );
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard students={students} />}
        />

        <Route
          path="/students"
          element={
            <Students
              students={students}
              onDelete={deleteStudent}
            />
          }
        />

        <Route
          path="/students/new"
          element={
            <StudentForm
              students={students}
              onSave={saveStudent}
            />
          }
        />

        <Route
          path="/students/:id/edit"
          element={
            <StudentForm
              students={students}
              onSave={saveStudent}
            />
          }
        />
        <Route path="/students/card" element={<StudentCardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path =/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
