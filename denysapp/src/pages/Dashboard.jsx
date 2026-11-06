
function Dashboard({ students }) {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to the Student Information System.</p>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="stat-card">
          <h3>Male Students</h3>
          <p>
            {students.filter(
              (student) => student.gender === "Male"
            ).length}
          </p>
        </div>

        <div className="stat-card">
          <h3>Female Students</h3>
          <p>
            {students.filter(
              (student) => student.gender === "Female"
            ).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
