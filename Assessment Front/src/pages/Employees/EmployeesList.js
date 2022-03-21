import React from "react";
import { useState, useEffect } from "react";
import Dashboard from "../dashboard/dashboard";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
// import Modal from "react-bootstrap/ModalHeader";
import "bootstrap/dist/css/bootstrap.min.css";

function AddModal(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phonestatus, setPhoneStatus] = useState("");
  const [dob, setDob] = useState("");
  const [profile_photo, setProfilephoto] = useState("");
  const createPost = (e) => {
    e.preventDefault();
console.log("profile_photo",profile_photo)
    axios
      .post(`http://127.0.0.1:8000/api/employees`, {
        first_name: fname,
        last_name: lname,
        email: email,
        phone_number: phone,
        phone_status: phonestatus,
        profile_photo: profile_photo,
        dob: dob,
      })
    .then((response) => {
      console.log("responssssssssssssse", response);
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              First Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Last Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Age"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Phone
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Phone status
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder=" Phone status"
                onChange={(e) => setPhoneStatus(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Date of Birth
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder=" Date"
                onChange={(e) => setDob(e.target.value)}
              />
            </Col>
          </Form.Group>

      
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Profile Photo
            </Form.Label>
            <Col sm={10}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  onChange={(e) => setProfilephoto(e.target.files[0].name)}
                />
              </Form.Group>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={createPost}>
                ADD
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function UpdateModal(props) {
  const [items, setItems] = useState({});
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");

  const getData = async () => {
    axios.get(`http://127.0.0.1:8000/api/employees`).then((res) => {
      setItems(res.data);
      setFname(res.data.first_name);
      setLname(res.data.last_name);
      setAge(res.data.age);
    });
  };

  function updatePost() {
    axios
      .put(`http://127.0.0.1:8000/api/employees/${props.id}`, {
        first_name: fname,
        last_name: lname,
        age: age,
      })
      .then((response) => {});
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onEnter={getData}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              First Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Last Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Age
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={updatePost}>
                Update
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function EmployeesList() {
  const [profile_photo, setProfilephoto] = useState(
    "https://www.pikpng.com/pngl/m/5-52254_png-file-user-profile-icon-svg-clipart.png"
  );
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [id, setId] = useState("");
  document.title = "Employees";
  const [items, setItems] = useState([]);

  const getData = async () => {
    axios.get(`http://127.0.0.1:8000/api/employees`).then((res) => {
      setItems(res.data.results);
    });
  };
  async function deleteOperation(id) {
    axios.delete(`http://127.0.0.1:8000/api/employees/${id}`).then(() => {
      Swal.fire("Good job!", "Employee Deleted Successfully", "success");
    });
    getData();
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Dashboard />

      <AddModal show={modalShow} onHide={() => setModalShow(false)} />
      <UpdateModal
        id={id}
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
      <div className="table-wrapper" style={{ margin: "5% 25% 0 20%" }}>
        <h2>Employees</h2>
        <Button
          onClick={() => setModalShow(true)}
          variant="primary"
          size="medium"
          block="block"
          type="submit"
          style={{ margin: "2% 0 4% 0" }}
        >
          Add Employee
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>F Name</th>
              <th>L Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Phone status</th>
              <th>photo</th>
              <th>DOB</th>
              <th style={{ width: "50px" }}>Delete</th>
              <th style={{ width: "50px" }}>Edit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone_number}</td>
                <td>{item.phone_status}</td>
                <td>
                  {" "}
                  <img
                    style={{ width: "60px", height: "50px" }}
                    src={`${profile_photo}`}
                  ></img>
                </td>
                <td>{item.dob}</td>

                <td>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteOperation(item.id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  {" "}
                  <Button
                    size="sm"
                    variant="info"
                    style={{ marginRight: "10px" }}
                    onClick={() => {
                      setId(item.id);
                      setModalShow2(true);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default EmployeesList;
