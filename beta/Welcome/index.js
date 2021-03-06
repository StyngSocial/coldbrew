import Background from "../../components/Background";
import { useState } from "react";
import coldbrew from "../../public/logo.png";
import {
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  Badge,
  Tabs,
  Tab,
} from "react-bootstrap";
import { signIn } from "next-auth/client";
import styles from "./Welcome.module.scss";
import Link from "next/link";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center text-center">
      <Card
        className="bg-light p-0"
        style={{ width: "25rem", height: "500px" }}
      >
        <Tabs
          defaultActiveKey="welcome"
          id="coldbrew"
          className="d-flex m-0 nav-pills nav-fill"
        >
          <Tab eventKey="welcome" title="Sign Up">
            <Card.Body>
              <Card.Img
                className="mb-2"
                variant="top"
                src={coldbrew}
                style={{ height: "150px", width: "150px" }}
              />
              <Card.Title className="m-0">
                <Badge className="my-2" variant="primary">
                  v0.0.8
                </Badge>
                <br />
                Welcome!
              </Card.Title>
              <Card.Subtitle className="mt-1 text-muted">
                Styng Social &copy;
              </Card.Subtitle>
              <Card.Text>
                Cold Brew beta by <i>Styng Social</i> is only available through
                invite currently. Provide an email to receive an invite in the
                near future.
              </Card.Text>
              {/* <Form>
                <InputGroup className="mb-4">
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Username"
                  />
                </InputGroup>

              </Form> */}
              <Button variant="primary" type="submit" className="text-light">
                Sign Up
              </Button>
            </Card.Body>
          </Tab>
          <Tab eventKey="login" title="Log In" className="">
            <Card.Body>
              <Card.Img
                className="mb-2"
                variant="top"
                src={coldbrew}
                style={{ height: "150px", width: "150px" }}
              />
              <Card.Title className="m-0">
                <Badge className="my-2" variant="primary">
                  v0.0.8
                </Badge>
                <br />
                Welcome!
              </Card.Title>
              <Card.Subtitle className="mt-1 text-muted"></Card.Subtitle>
              <Card.Text>Cold Brew</Card.Text>
              {/* <Form>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                />

                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />

              </Form> */}
              <Button
                size="lg"
                variant="primary"
                type="submit"
                onClick={() => {
                  console.log(`Button click: ${email}`);
                  signIn("credentials", {
                    username: email,
                    password: password,
                  });
                }}
              >
                Login
              </Button>
            </Card.Body>
          </Tab>
        </Tabs>
      </Card>
      <Background />
    </div>
  );
};
//
export default Welcome;
