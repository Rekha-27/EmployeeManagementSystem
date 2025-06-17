import React, { useEffect, useRef, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
const CreateEmployee = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("Female");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    salary: "",
  });
  const { id } = useParams();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const department = useRef();
  const salary = useRef();
  const saveOrUpdateEmployee = (event) => {
    event.preventDefault();
    if (formvalidate()) {
      if (id) {
        const employee = {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          department: department.current.value,
          gender: gender,
          salary: salary.current.value,
        };
        updateEmployee(id, employee)
          .then((response) => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        const employee = {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          gender: gender,
          department: department.current.value,
          salary: salary.current.value,
        };
        createEmployee(employee)
          .then((Response) => {
            navigate("/");
          })
          .catch((error) => console.log(error));
      }
    }
    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
    department.current.value = "";
    salary.current.value = "";
  };
  function changetitle() {
    if (id) {
      return <h2 className="text-center title">Update Employee</h2>;
    } else {
      return <h2 className="text-center title">Add Employee</h2>;
    }
  }
  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          firstName.current.value = response.data.firstName;
          lastName.current.value = response.data.lastName;
          email.current.value = response.data.email;
          department.current.value = response.data.department;
          salary.current.value = response.data.salary;
          setGender(response.data.gender);
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  }, [id]);
  const formvalidate = () => {
    let validate = true;
    const errorcopy = { ...errors };
    if (firstName.current.value.trim()) {
      errorcopy.firstName = "";
    } else {
      errorcopy.firstName = "First name is required";
      validate = false;
    }
    if (lastName.current.value.trim()) {
      errorcopy.lastName = "";
    } else {
      errorcopy.lastName = "Last name is required";
      validate = false;
    }
    if (email.current.value.trim()) {
      errorcopy.email = "";
    } else {
      errorcopy.email = "Email is required";
      validate = false;
    }
    if (department.current.value.trim()) {
      errorcopy.department = "";
    } else {
      errorcopy.department = "Department name is required";
      validate = false;
    }
    if (salary.current.value.trim()) {
      errorcopy.salary = "";
    } else {
      errorcopy.salary = "Salary is required";
      validate = false;
    }
    setErrors(errorcopy);
    return validate;
  };
  return (
    <div className="container empcontainer">
      <div className="row">
        <div className="card empcard col-md-6 offset-md-3 offset-md-3">
          {changetitle()}
          <div className="card-body mb-10">
            <form>
              <div className="form-group mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  ref={firstName}
                  placeholder="Enter first name..."
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                />
                {errors.firstName && (
                  <label className="invalid-feedback">{errors.firstName}</label>
                )}
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name..."
                  ref={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                />
                {errors.lastName && (
                  <label className="invalid-feedback">{errors.lastName}</label>
                )}
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  ref={email}
                  placeholder="Enter employee email.."
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                  <label className="invalid-feedback">{errors.email}</label>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Gender</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Department Name</label>
                <input
                  type="text"
                  placeholder="Enter department name.."
                  ref={department}
                  className={`form-control ${
                    errors.department ? "is-invalid" : ""
                  }`}
                />
                {errors.department && (
                  <label className="invalid-feedback">
                    {errors.department}
                  </label>
                )}
              </div>
              <div className="form-group mb-3 ">
                <label className="form-label">Salary</label>
                <input
                  type="number"
                  placeholder="Enter digits..."
                  ref={salary}
                  className={`form-control ${
                    errors.salary ? "is-invalid" : ""
                  }`}
                />
                {errors.salary && (
                  <label className="invalid-feedback">{errors.salary}</label>
                )}
              </div>
              <div className="form-group mb-7">
                <button className="submit" onClick={saveOrUpdateEmployee}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
