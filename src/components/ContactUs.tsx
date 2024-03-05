import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export function Conatct() {
  return (
    <>
      <section className="default-padding bg-theme-secondary">
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12" className="mb-5 text-start">
              <p className="fs-4 text-highlight">GET IN TOUCH</p>
              <h1 className=" banner-heading">Feel Free Contact Me</h1>
            </Col>
            <Col lg="6" md="6" xs="12" className="mb-5">
              <Form>
                <Form.Group
                  className="mb-4 floating__form-input"
                  controlId="name"
                >
                  <Form.Control type="text" />
                  <span className="floating-label">Name</span>
                </Form.Group>
                <Form.Group
                  className="mb-4 floating__form-input"
                  controlId="email"
                >
                  <Form.Control type="email" />
                  <span className="floating-label">Email</span>
                </Form.Group>
                <Form.Group
                  className="mb-4 floating__form-input"
                  controlId="email"
                >
                  <Form.Control type="text" />
                  <span className="floating-label">Subject</span>
                </Form.Group>
                <Form.Group
                  className="mb-4 floating__form-input"
                  controlId="message"
                >
                  <textarea rows={6} className="form-control"></textarea>
                  <span className="floating-label-two">Message</span>
                </Form.Group>
                <Button className="btn button-primary me-2 mb-3 w-100">
                  Submit
                </Button>{" "}
              </Form>
            </Col>
            <Col lg="6" md="6" xs="12" className="mb-5"></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
