import { Container, Button } from "react-bootstrap";
import { signIn } from "next-auth/client";

const LogIn = () => {
  return (
    <Container className="text-center mt-4">
      <h3>What's up, Dylan?</h3>
      <p className="text-muted">you sick fuck</p>
      <h5 className="w-50 m-auto py-4">
        I'm gonna need you to press that log in button. I have some important
        information to share.
      </h5>
      <Button
        variant="primary"
        size="lg"
        href="/api/auth/signin"
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Log In
      </Button>
    </Container>
  );
};

export default LogIn;
