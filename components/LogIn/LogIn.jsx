import styles from "./Login.module.scss";
import { Container, Button } from "react-bootstrap";
import { signIn } from "next-auth/client";

/**
 * TODO: Make this a page
 */

const Login = () => {
  return (
    <Container className="d-flex flex-column vh-100 align-items-center justify-content-center w-50">
      <h3 className="text-secondary">
        Welcome to the Styng Social internal beta!
      </h3>
      <p className="text-muted">Questions/Comments: ben@styng.social</p>
      <h5 className="w-50 fs-3 mb-4">
        Log in with your Twitter to view your feed and interact with the Twitter
        platform. The beta uses Twitter to get feedback before the main Styng
        Social platform release.
      </h5>
      <Button
        variant="primary"
        size="lg"
        href="/api/auth/signin"
        className=""
        onClick={(e) => {
          e.preventDefault();
          signIn("twitter");
        }}
      >
        Log In
      </Button>
    </Container>
  );
};

export default Login;
