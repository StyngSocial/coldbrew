import styles from "./Login.module.scss";
import { Container, Button } from "react-bootstrap";
import { signIn } from "next-auth/client";

/**
 * TODO: Make this a page
 */

const Login = () => {
  return (
    <Container className={`"text-center ${styles.login}`}>
      <h3 className="text-center">What's goin on, beautiful people?</h3>
      <p className="text-muted text-center">you sick fucks</p>
      <h5 className="w-50 m-auto py-4 text-center">
        I'm gonna need you to press that log in button. I have some important
        information to share.
      </h5>
      <Button
        variant="primary"
        size="lg"
        href="/api/auth/signin"
        className="d-inline"
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
