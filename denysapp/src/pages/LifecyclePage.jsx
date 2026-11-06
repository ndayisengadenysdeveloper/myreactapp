
import { Component } from "react";

class StudentLifecycle extends Component {
  componentDidMount() {
    console.log("Student component mounted!");
  }

  componentWillUnmount() {
    console.log("Student component unmounted!");
  }

  render() {
    return (
      <div className="stat-card">
        <h2>Student Lifecycle</h2>
        <p>The student component is currently mounted.</p>
        <p>Student Name: Alice Mukamana</p>
        <p>Registration Number: ST001</p>
      </div>
    );
  }
}

export default StudentLifecycle;
