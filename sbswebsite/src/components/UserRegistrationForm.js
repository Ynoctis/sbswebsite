import React, { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

const UserRegistrationForm = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('en-US', { month: 'short' });
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const initialFormData = {
    previouslyPlayed: '',
    dateSubmitted: formattedDate,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    position: [],
    address: '',
    postalCode: '',
    email: '',
    cellPhone: '',
    otherPhone: '',
    teamNumber: 0,
    teamColor: '',
    playerNotes: '',
    fees: 0,
    owing: '',
    transactionDate: '',
    regForm: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData});

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'select-multiple' ? Array.from(e.target.selectedOptions, (option) => option.value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
    // setFormData(initialFormData);
  };

  return (
    <Container className="mt-4">
      <h2>User Registration Form</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} className="mb-3" controlId="previouslyPlayed">
          <Form.Label>Have you played in the league before?</Form.Label>

          <Form.Control
            as="select"
            name="previouslyPlayed"
            value={formData.previouslyPlayed}
            onChange={handleInputChange}
            multiple={false}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>
        <hr />

        {/* ... (Other fields) */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="dob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required />
          </Form.Group>
        </Row>

        <Row>
          <Col xs={6}>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control 
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="postalCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cellPhone">
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control
              name="cellPhone"
              value={formData.cellPhone}
              onChange={handleInputChange}
              required/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="otherPhone">
              <Form.Label>Other Phone</Form.Label>
              <Form.Control 
              name="otherPhone"
              value={formData.otherPhone}
              onChange={handleInputChange}
              required/>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group as={Col} className="mb-3" controlId="position">
          <Form.Label>What is your preferred position?</Form.Label>

          <Form.Control
            as="select"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            multiple={false}
            required
          >
            <option value="">Select</option>
            <option value="GK">GK</option>

            <option value="LB">LB</option>
            <option value="CB">CB</option>
            <option value="RB">RB</option>
            <option value="LM/LW">LM/LW</option>
            <option value="CDM/CM/CAM">CDM/CM/CAM</option>
            <option value="RM/RW">RM/RW</option>
            <option value="ST">ST</option>

          </Form.Control>
        </Form.Group>



        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default UserRegistrationForm;
