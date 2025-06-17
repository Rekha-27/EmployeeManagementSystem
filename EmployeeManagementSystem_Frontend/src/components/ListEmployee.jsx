import React, { useEffect, useState } from "react";
import { deleteEmployee, listOfEmployees } from "../service/EmployeeService";
import { MdDelete } from "react-icons/md";
import { MdSystemUpdateAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const [emplist, setEmpList] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    employeeList();
  }, []);
  function employeeList() {
    listOfEmployees()
      .then((response) => {
        setEmpList(response.data);
      })
      .catch((error) => console.error(error));
  }
  const updateEmployee = (id) => {
    navigator(`/edit-employee/${id}`);
  };
  const deletesEmployee = (id) => {
    console.log(id);
    deleteEmployee(id)
      .then((respone) => {
        employeeList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="listemp">
      {emplist.map((employee) => (
        <div className="cards" key={employee.id}>
          <div className="details">
            <div>
              <p className="pelement">
                <span className="heading">Employee ID:</span>
                <span className="value">{employee.id}</span>
              </p>
              <p className="pelement">
                <span className="heading">First Name:</span>
                <span className="value">{employee.firstName}</span>
              </p>
              <p className="pelement">
                <span className="heading">Last Name:</span>
                <span className="value">{employee.lastName}</span>
              </p>
              <p className="pelement">
                <span className="heading">Salary:</span>
                <span className="value">{employee.salary}</span>
              </p>
            </div>

            <div className="image">
              <img
                src={
                  employee.gender === "Female"
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IC239LDu2Qs7P0bykvDVtHjJ1NJjTskEfwHTcpmi-hKWd9HbU4JabbqRqvYrf_VFyKI&usqp=CAU"
                    : "https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-character-man-businessman-business-suit-looking-camera-isolated-transparent-png-background-277029050.jpg"
                }
                className="cards-img"
                alt="..."
              />
            </div>
          </div>
          <div className="remain">
            <p className="element">
              <span className="heading">Email:</span>
              <span className="value">{employee.email}</span>
            </p>
            <p className="element">
              <span className="heading">Department Name:</span>
              <span className="value">{employee.department}</span>
            </p>
            <div className="buttondiv">
              <div className="btn">
                <MdSystemUpdateAlt
                  size={25}
                  onClick={() => updateEmployee(employee.id)}
                />
              </div>
              <div className="btn">
                <MdDelete
                  size={25}
                  onClick={() => deletesEmployee(employee.id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListEmployee;
{
  /* <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {emplist.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table> */
}
