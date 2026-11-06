
import { useLocation, useNavigate } from "react-router-dom";
import StudentIDCard from "../components/StudentIDCard";

function StudentCardPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const student = state?.student;

  if (!student) {
    return (
      <div className="page">
        <h2>No student selected</h2>
        <button onClick={() => navigate("/students")}>
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Student Identity Card</h1>
      <p>Student card generated successfully!</p>

      <StudentIDCard student={student} />

      <button onClick={() => navigate("/students")}>
        Back to Students
      </button>
    </div>
  );
}

export default StudentCardPage;
