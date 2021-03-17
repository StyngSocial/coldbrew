import Background from "../components/Background.jsx";
import { useState } from "react";
import axios from "axios";
import coldbrew from "../public/logo.png";
import { signIn } from "next-auth/client";
import { Card, Form, Button, Badge, Tabs, Tab } from "react-bootstrap";

const Beta = () => {
  const version = "v0.0.9";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const signUp = () => {
    if (!name || !email) {
      alert("Please privde a name and email.");
      return;
    }
    const newUser = `New user - ${name}.\n${email}`;
    axios
      .post("/api/transport", {
        name: name,
        email: email,
        message: newUser,
      })
      .then((resp) => {
        if (resp.status != 200) {
          return alert("Didn't work. Try again");
        } else {
          alert(
            "Thank you for signing up! You will receive an email shortly with your account."
          );
        }
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
                <Badge className="m-2 d-inline" variant="primary">
                  {version}
                </Badge>
              </Card.Title>
              <Card.Subtitle className="mt-2 text-muted">
                Invite only. Sign up to be added.
              </Card.Subtitle>

              <Form className="my-4">
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
                  onClick={() => signUp()}
                  className="text-light"
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
                    {version}
                  </Badge>
                </Card.Title>
              </Card.Title>
              <Card.Subtitle className="mt-1 text-muted">
                monetizing clout.
              </Card.Subtitle>

              <Button
                size="lg"
                variant="primary"
                className="my-5 text-light"
                onClick={() => signIn("auth0")}
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
export default Beta;
