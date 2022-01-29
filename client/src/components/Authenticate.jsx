import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Authenticate extends React.Component {

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasic">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={this.props.onChangeUser} type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.props.onChangePwd} type="password" placeholder="Password" />
        </Form.Group>

        <Button onClick={this.props.submitClick} variant="primary" type="button">
          Submit
        </Button>
      </Form>

    );
  }
}
export default Authenticate;
