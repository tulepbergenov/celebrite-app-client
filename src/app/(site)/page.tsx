import { appTitle } from "@/shared/utils";
import { Metadata } from "next";
import { Col, Container, Row } from "react-bootstrap";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <header className="py-3">
              <h1 className="h1 m-0">Reputation of participants</h1>
            </header>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
