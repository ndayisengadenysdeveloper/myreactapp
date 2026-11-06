
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student SIS</h2>

      <div className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/students/new">Add Student</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
