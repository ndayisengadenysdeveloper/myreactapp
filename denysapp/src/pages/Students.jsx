
import { Link } from "react-router-dom";

function Students({ students, onDelete }) {
  return (
    <div className="page">
      <h1>Student Management</h1>

      <Link className="button" to="/students/new">
        + Add New Student
      </Link>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Reg. Number</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Programme</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.registrationNumber}</td>
                <td>{student.studentName}</td>
                <td>{student.gender}</td>
                <td>{student.programme}</td>
                <td>
                  <Link to={`/students/${student.id}/edit`}>
                    Edit
                  </Link>

                  {" | "}

                  <button
                    className="delete-button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Delete this student?"
                        )
                      ) {
                        onDelete(student.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="5">No students registered yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
