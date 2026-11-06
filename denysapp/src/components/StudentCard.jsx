
import React from "react";

function StudentCard({ studentName, registrationNumber, programme }) {
  return (
    <div className="student-card">
      <h2>Student Information</h2>

      <p>
        <strong>Student Name:</strong> {studentName}
      </p>

      <p>
        <strong>Registration Number:</strong> {registrationNumber}
      </p>

      <p>
        <strong>Programme:</strong> {programme}
      </p>
    </div>
  );
}

export default StudentCard;
