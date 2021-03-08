import Background from "../components/Background";
import { useState } from "react";
import axios from "axios";
import coldbrew from "../public/logo.png";
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
import styles from "./Beta.module.scss";

const Beta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const signUp = () => {
    console.log("hi");
    const newUser = `New user - ${name}.\n${email}`;
    axios
      .post("/api/transport", {
        name: name,
        email: email,
        message: newUser,
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center text-center">
      <Card className="bg-light p-0" style={{ width: "350px" }}>
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
                <div
                  className="h3 d-inline text-roast"
                  style={{ fontFamily: "Dancing Script" }}
                >
                  Cold Brew
                </div>
                <Badge className="m-2 d-inline " variant="primary">
                  v0.0.8
                </Badge>
              </Card.Title>
              <Card.Subtitle className="mt-2 text-muted">
                Invite only. Sign up to be added.
              </Card.Subtitle>

              <Form className="my-4" onSubmit={signUp}>
                <Form.Control
                  className="my-4"
                  type="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleName}
                />
                <Form.Control
                  className="my-4"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                />
                <Button
                  size="lg"
                  variant="primary"
                  type="submit"
                  className="text-roast"
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Tab>
          <Tab eventKey="login" title="Log In">
            <Card.Body>
              <Card.Img
                className="mb-2"
                variant="top"
                src={coldbrew}
                style={{ height: "150px", width: "150px" }}
              />
              <Card.Title className="m-0">
                <Card.Title className="m-0">
                  <div
                    className="h3 d-inline"
                    style={{ fontFamily: "Dancing Script" }}
                  >
                    Cold Brew
                  </div>
                  <Badge className="m-2 d-inline text-roast" variant="primary">
                    v0.0.8
                  </Badge>
                </Card.Title>
              </Card.Title>
              <Card.Subtitle className="mt-1 text-muted">
                monetizing clout.
              </Card.Subtitle>

              <Form className="my-4">
                <FormControl
                  className="my-4"
                  id="username"
                  placeholder="@username"
                  value={username}
                  onChange={handleUsername}
                />

                <Form.Control
                  className="my-4"
                  type="password"
                  placeholder="•••••••••"
                  value={password}
                  onChange={handlePassword}
                />
                <Button
                  size="lg"
                  variant="primary"
                  type="submit"
                  href="/api/auth/signin"
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Tab>
        </Tabs>
      </Card>
      <Background />
    </div>
  );
};
//
export default Beta;
