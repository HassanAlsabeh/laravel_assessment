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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setwWbsite] = useState("");

  // console.log("fname", fname);
  function createPost() {
    axios
      .post(`http://127.0.0.1:8000/api/companies/`, {
        name: name,
        address: address,
        website: website,
      })
      .then((response) => {});
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Company
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
           Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
             Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Website
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Website"
                onChange={(e) => setwWbsite(e.target.value)}
              />
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
    axios.get(`http://127.0.0.1:8000/api/companies`).then((res) => {
      setItems(res.data);
      setFname(res.data.first_name);
      setLname(res.data.last_name);
      setAge(res.data.age);
      console.log("data", res);
    });
  };

  function updatePost() {
    axios
      .put(`http://127.0.0.1:8000/api/companies/${props.id}`, {
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
          Add Company
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
function CompanyList() {
  const [profile_photo, setProfilephoto] = useState("https://www.pikpng.com/pngl/m/5-52254_png-file-user-profile-icon-svg-clipart.png");
  
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [id, setId] = useState("");
  document.title = "Companies";
  const [items, setItems] = useState([]);

  const getData = async () => {
    axios.get(`http://127.0.0.1:8000/api/companies`).then((res) => {
      setItems(res.data.results);
      console.log("data", res.data.results);
    });
  };
  async function deleteOperation(id) {
    axios.delete(`http://127.0.0.1:8000/api/companies/${id}`).then(() => {
      Swal.fire("Good job!", "Company Deleted Successfully", "success");
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
        <h2>Companies</h2>
        <Button
          onClick={() => setModalShow(true)}
          variant="primary"
          size="medium"
          block="block"
          type="submit"
          style={{ margin: "2% 0 4% 0" }}
        >
          Add Company
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Website</th>
              <th>Logo</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.website}</td>
                <td> <img
                      style={{ width: "60px", height: "50px" }}
                      src={`${profile_photo}`}
                    ></img></td>

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
export default CompanyList;
