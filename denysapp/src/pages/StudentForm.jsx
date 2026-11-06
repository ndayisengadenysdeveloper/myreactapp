

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentIDCard from "../components/StudentIDCard";


function StudentForm({ students, onSave }
    
) {
    const [showCard, setShowCard] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const existingStudent = students.find(
    (student) => String(student.id) === id
  );

  const [form, setForm] = useState({
    studentName: "",
    registrationNumber: "",
    gender: "Male",
    programme: "",
    email: "",
  });

  useEffect(() => {
    if (existingStudent) {
      setForm({
        studentName: existingStudent.studentName,
        registrationNumber: existingStudent.registrationNumber,
        gender: existingStudent.gender,
        programme: existingStudent.programme,
        email: existingStudent.email || "",
      });
    }
  }, [id, existingStudent]);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      ...form,
      id: existingStudent?.id ?? Date.now(),
    });

    navigate("/students");
  }

  if (id && !existingStudent) {
    return (
      <div className="page">
        <h2>Student not found</h2>
        <button onClick={() => navigate("/students")}>
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div className="page form-page">
      <h1>{id ? "Edit Student" : "Register Student"}</h1>

      <form onSubmit={handleSubmit} className="student-form">
        <label>Student Name</label>
        <input
          name="studentName"
          value={form.studentName}
          onChange={handleChange}
          required
        />

        <label>Registration Number</label>
        <input
          name="registrationNumber"
          value={form.registrationNumber}
          onChange={handleChange}
          required
        />

        <label>Gender</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Programme</label>
        <input
          name="programme"
          value={form.programme}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit">
          {id ? "Save Changes" : "Register Student"}
        </button>
      </form>
      <button
  type="button"
  onClick={() => {
    if (
      form.studentName.trim() &&
      form.registrationNumber.trim() &&
      form.programme.trim()
    ) {
      setShowCard(true);
    } else {
      alert("Please fill in the required student details.");
    }
  }}
>
  Generate Student Card
</button>
    </div>
    
  );
}

export default StudentForm;
