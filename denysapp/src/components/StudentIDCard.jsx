
import "./StudentIDCard.css";
function StudentIDCard({ student }) {
  if (!student) return null;

  const initials = student.studentName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");

  return (
    <div className="id-card-wrapper">
      <div className="student-id-card">
        <div className="id-card-header">
          <div className="id-school-logo">SIS</div>
          <div>
            <h3>STUDENT IDENTITY</h3>
            <span>STUDENT INFORMATION SYSTEM</span>
          </div>
        </div>

        <div className="id-card-body">
          <div className="id-avatar">{initials || "ST"}</div>

          <div className="id-student-details">
            <h2>{student.studentName}</h2>
            <span className="id-status">REGISTERED STUDENT</span>

            <div className="id-detail">
              <span>REGISTRATION NO.</span>
              <strong>{student.registrationNumber}</strong>
            </div>

            <div className="id-detail">
              <span>PROGRAMME</span>
              <strong>{student.programme}</strong>
            </div>

            <div className="id-detail">
              <span>GENDER</span>
              <strong>{student.gender}</strong>
            </div>

            {student.email && (
              <div className="id-detail">
                <span>EMAIL</span>
                <strong>{student.email}</strong>
              </div>
            )}
          </div>
        </div>

        <div className="id-card-footer">
          <span>OFFICIAL STUDENT CARD</span>
          <span>STUDENT • {student.registrationNumber}</span>
        </div>
      </div>

      <button
        className="print-card-button"
        onClick={() => window.print()}
      >
        Print Student Card
      </button>
    </div>
  );
}

export default StudentIDCard;
