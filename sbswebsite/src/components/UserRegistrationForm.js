import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import CodeOfConductModal from './CodeOfConductModal';

const UserRegistrationForm = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const initialFormData = {
    previously_played: '',
    date_submitted: formattedDate,
    first_name: '',
    last_name: '',
    date_of_birth: '',
    position: [],
    address: '',
    postal_code: '',
    email: '',
    cell_phone: '',
    other_phone: '',
    absent_days: '',
    emailRepeat: '',
  };

  const [formErrors, setFormErrors] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    emailRepeat: '',
    address: '',
    cell_phone: '',
    postal_code: '',

    // ... (other form fields)
  });

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    let error = '';

    switch (name) {
      case 'first_name':
        error = value.trim() === '' ? 'First Name is required' : '';
        break;
      case 'last_name':
        error = value.trim() === '' ? 'Last Name is required' : '';
        break;
      case 'date_of_birth':
        // Add your date of birth validation logic
        error = value.trim() === '' || !/^\d{4}-\d{2}-\d{2}$/.test(value);
        break;
      // ... (add validation for other fields)
      case 'email':
        error = value.trim() === '' ? 'Email is required' : '';
        break;
      case 'emailRepeat':
        const original = formData.email;
        error = value.trim() !== original ? 'Emails do not match' : '';
        break;
      case 'address':
        error = value.trim() === '' ? 'Address is required' : '';
        break;
      case 'postal_code':
        const trimmedValue = value.trim();
        error =
          trimmedValue === ''
            ? 'Postal code is required'
            : trimmedValue.length !== 6
              ? 'Invalid postal code format (must be 6 characters)'
              : '';
        break;
      case 'cell_phone':
        const cp = value.trim();
        error =
          cp === ''
            ? 'Cell phone is required'
            : cp.length !== 10
              ? 'Invalid cell phone format (must be 10 digits)'
              : '';
        break;
      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'select-multiple' ? Array.from(e.target.selectedOptions, (option) => option.value) : value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Add your submission logic here
  //   // setFormData(initialFormData);
  // };

  const logFormData = (formData) => {
    const formDataObject = {};

    for (const entry of formData.entries()) {
      formDataObject[entry[0]] = entry[1];
    }

    // console.log(formDataObject);
  };
  // const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataNew = new FormData();

      const futureDate = '2024-05-14';
      const birthDate = new Date(formData.date_of_birth)
      const futureDateObj = new Date(futureDate)
      let age = futureDateObj.getFullYear() - birthDate.getFullYear()
      if (
        futureDateObj.getMonth() < birthDate.getMonth() ||
        (futureDateObj.getMonth() === birthDate.getMonth() &&
          futureDateObj.getDate() < birthDate.getDate())
      ) {
        // If birthday hasn't occurred yet, subtract 1 from age
        age--;
      }


      formDataNew.append('date_submitted', formData.date_submitted);
      formDataNew.append('first_name', formData.first_name);
      formDataNew.append('last_name', formData.last_name);
      formDataNew.append('date_of_birth', formData.date_of_birth);
      formDataNew.append('position', formData.position);
      formDataNew.append('address', formData.address);
      formDataNew.append('postal_code', formData.postal_code);
      formDataNew.append('email', formData.email);
      formDataNew.append('cell_phone', formData.cell_phone);
      formDataNew.append('other_phone', formData.other_phone);
      formDataNew.append('previously_played', formData.previously_played);
      formDataNew.append('age', age)
      formDataNew.append('absent_days', formData.absent_days)

      // Log the FormData for debugging
      logFormData(formDataNew);
      // console.log('Form submitted:', formData);

      const response = await fetch('https://warm-harbor-21177-1d402ead92d1.herokuapp.com/api/userreg/', {
        method: 'POST',
        body: formDataNew,
      });

      if (response.ok) {
        // console.log('Form submitted successfully!');
        if (formData.previously_played === 'No') {
          window.alert('Thank you for your interest in our league, should your application be successful, and we have room for new players we will be in contact with you regarding payment of player fees - $200.')
        }
        // Optionally reset the form data to initial values
        setFormData(initialFormData);
        window.alert('Form submitted successfully!');
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during form submission:', error.message);
    }
  };



  const agreementText = `In consideration of the League allowing me to participate, I agree:
a)  to assume all risks arising out of, associated with or related to my participation;
b)  to be solely responsible for any injury, loss or damage that I might sustain while participating; and
c)  to release the League from liability for any and all claims, demands, actions and costs that might arise out of my participation.
d)  to release the League from any reimbursement of fees or costs due to injury, suspension or any other reason resulting in an inability to complete the season.
e)  to release the League to share my contact information with other team members.`;


  const openGoogleForm = () => {
    const googleFormUrl = 'https://forms.gle/gUxSsPS6A44mNtEW7';
    window.open(googleFormUrl, '_blank');
  }

  const openSunnyPark = () => {
    const sunnyParkUrl = 'https://www.google.com/maps/place/Sunnybrook+Park+Sports+Fields/@43.7213163,-79.3619617,15.52z/data=!4m6!3m5!1s0x89d4cd17a92aad43:0x849aaebfc97ef9aa!8m2!3d43.7244446!4d-79.3553558!16s%2Fg%2F11df52dc89?authuser=0&entry=tts'
    window.open(sunnyParkUrl, '_blank')
  }


  return (
    <Container className="mt-4">
      <h2>User Registration Form</h2>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} className="mb-3" controlId="previously_played">
          <Form.Label>Have you played in the Sunnybrook Soccer League before?</Form.Label>

          <Form.Control
            as="select"
            name="previously_played"
            value={formData.previously_played}
            onChange={handleInputChange}
            multiple={false}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Control>
        </Form.Group>
        <hr />

        {formData.previously_played === 'No' && (
          <div>
            <h2>New Player Information:</h2>
            <h4>Thank you for your application to Sunnybrook Soccer League. We play every Sunday morning at <span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={openSunnyPark}>Sunnybrook Park Sports Fields</span> from early May to late September with playoffs starting in August. We are a social club and players play on different teams each year so that eventually you will get to know most of the other players in the league. <span style={{ textDecoration: 'underline' }}>Please continue to apply for registration and you will be contacted for payment if your application is accepted into the league.</span> Note that if you are accepted, as a new player, you will not be immediately placed on a team but will be asked to play on a few different teams for the first few weeks so that the executive can decide which team to place you on. We do this to balance the teams in the league. NOTE this is an over 35 league but we accept goalies over 18 years old to the league. This is a social league, the average age is 50 with many players having played in the League for over 15 years. The player fee for 2024 will be $200.</h4>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="By clicking this checkbox - I agree and understand the above" required />
            </Form.Group>

            <hr />
          </div>

        )}


        {/* ... (Other fields) */}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required />
            <Form.Text className="text-danger">{formErrors.first_name}</Form.Text>
          </Form.Group>
          <Form.Group as={Col} controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required />
            <Form.Text className="text-danger">{formErrors.last_name}</Form.Text>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="dob">
            <Form.Label>Date of Birth</Form.Label>
            {/* <Form.Control
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
              max={formattedDate}
              required /> */}
            {window.innerWidth <= 600 ? (
              <Form.Control
                type="text"
                placeholder="YYYY-MM-DD"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleInputChange}
                pattern="\d{4}-\d{2}-\d{2}"
                required
              />
            ) : (
              // Render the date input for larger screens
              <Form.Control
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleInputChange}
                max={formattedDate}
                required
              />
            )}
            <Form.Text className="text-danger">{formErrors.date_of_birth}</Form.Text>
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
            <Form.Text className="text-danger">{formErrors.email}</Form.Text>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Repeat Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please re-enter your email"
              name="emailRepeat"
              value={formData.emailRepeat}
              onChange={handleInputChange}
              required />
            <Form.Text className="text-danger">{formErrors.emailRepeat}</Form.Text>
          </Form.Group>
        </Row>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required />
          <Form.Text className="text-danger">{formErrors.address}</Form.Text>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="postal_code">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                name="postal_code"
                value={formData.postal_code}
                onChange={handleInputChange}
                required />
              <Form.Text className="text-danger">{formErrors.postal_code}</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="cellPhone">
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control
                name="cell_phone"
                value={formData.cell_phone}
                onChange={handleInputChange}
                required />
              <Form.Text className="text-danger">{formErrors.cell_phone}</Form.Text>
            </Form.Group>
          </Col>
          {/* <Col>
            <Form.Group controlId="otherPhone">
              <Form.Label>Other Phone</Form.Label>
              <Form.Control
                name="other_phone"
                value={formData.other_phone}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col> */}
        </Row>

        <Row>
          <Col xs={3}>
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
          </Col>
          <Col>
            <Form.Group controlId="absent_days">
              <Form.Label>Let us know when you will be absent for an extended period (more than 4 Sundays between May and September - leave blank if NA)</Form.Label>
              <Form.Control
                name="absent_days"
                value={formData.absent_days}
                onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>

        <button type="button" className="btn btn-primary" onClick={openGoogleForm}>
          Photo Upload
        </button>

        <Form.Group controlId="disclaimer">
          <Form.Label style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Disclaimer</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}  // Specify the number of rows
            disabled  // Set the disabled prop to make it disabled
            defaultValue={"The player/participant hereby agrees to release and forever discharge Sunnybrook Soccer League/St Andrew SC (the “League”), its representatives, officers, agents, of and from any actions, causes of actions, claims and demands whatsoever arising out of and in relation to the player’s participation in all activities of the League (including pre and post-game activities) and further agrees to indemnify and hold harmless the League, its representatives, officers, agents for any damages, costs, claims and demands that the said League, its representatives, officers, agents may suffer and incur as a result of  the on-field and off-field conduct of the player/participant. The player/participant hereby agrees to release and forever discharge Sunnybrook Soccer League/St Andrew SC (the “League”), its representatives, officers, agents, of and from any actions, causes of actions, claims and demands whatsoever arising out of and in relation to the player’s participation in all activities of the League (including pre and post-game activities) and further agrees to indemnify and hold harmless the League, its representatives, officers, agents for any damages, costs, claims and demands that the said League, its representatives, officers, agents may suffer and incur as a result of the on-field and off-field conduct of the player/participant. "}
            style={{ fontStyle: 'italic' }}
          />
        </Form.Group>

        <Form.Group controlId="releaseLiability">
          <Form.Label style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Release of Liability</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}  // Specify the number of rows
            disabled  // Set the disabled prop to make it disabled
            defaultValue={agreementText}
            style={{ fontStyle: 'italic' }}
          />
        </Form.Group>
        <br />

        <div>
          <Button variant="primary" onClick={handleShow}>
            Code Of Conduct -- Read Here
          </Button>

          <CodeOfConductModal showModal={showModal} handleClose={handleClose} />
        </div>

        <br />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="By clicking this checkbox - I acknowledge that I have read the code of conduct and that I agree to abide by the code of conduct forming a part of this agreement. I further acknowledge that I have read this agreement, that I have executed this agreement voluntarily, and that this agreement is to be binding upon myself, my heirs, executors, administrators, and representatives. " required
            style={{ fontWeight: 'bold', fontStyle: 'italic' }}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="By clicking this checkbox - I acknowledge that I have read the code of conduct, that I have executed this agreement voluntarily, and that this agreement is to be binding upon myself, my heirs, executors, administrators and representatives." required />
        </Form.Group> */}
        {formData.previously_played === 'Yes' && (
          <div>
            <h4>Once you have completed and submitted this form, please send your 2024 player fees of <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>$200 by e-transfer to sunnybrook.soccer@gmail.com</span> with your <span style={{ textDecoration: 'underline' }}>full name</span> in the comments field.</h4>
            <h3 style={{ textDecoration: 'underline', fontWeight: 'bold' }}>REGISTRATION FOR 2024 IS NOT COMPLETE AND YOU WILL NOT BE PUT ON A TEAM UNTIL WE HAVE RECEIVED YOUR PAYMENT</h3>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          <br />
        </div>
      </Form>

    </Container>
  );
};

export default UserRegistrationForm;
