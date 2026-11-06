
import React, { Component } from "react";
import StudentCard from "./components/StudentCard";

class StudentDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: "Alice Mukamana",
      registrationNumber: "ST001",
      programme: "Software Development",
      visits: 0
    };
  }

  componentDidMount() {
    console.log("StudentDashboard mounted.");
  }

  componentDidUpdate() {
    console.log("StudentDashboard updated.");
  }

  componentWillUnmount() {
    console.log("StudentDashboard will unmount.");
  }

  updateStudent = () => {
    this.setState({
      studentName: "Eric Niyonzima",
      registrationNumber: "ST002",
      programme: "Software Development",
      visits: this.state.visits + 1
    });
  };

  render() {
    return (
      <div className="dashboard">
        <StudentCard
          studentName={this.state.studentName}
          registrationNumber={this.state.registrationNumber}
          programme={this.state.programme}
        />

        <p>Updates: {this.state.visits}</p>

        <button onClick={this.updateStudent}>
          Update Student
        </button>
      </div>
    );
  }
}

export default StudentDashboard;
