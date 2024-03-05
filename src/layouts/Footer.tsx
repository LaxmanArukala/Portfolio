import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function Footer() {
  return (
    <>
      <section className="default-padding footer-section pb-0">
        <Container>
          <Row>
            <Col lg="4" md="4" xs="12">
              <div className="footer_widget">
                <div className="footer__widget-title">
                  <h5>About us</h5>
                </div>
                <div className="mb-4">
                  <Link to="/">React-Bootstrap</Link>
                </div>
                <p>I'm generally available during to regular business hours,</p>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12">
              <div className="footer_widget">
                <div className="footer__widget-title">
                  <h5>Quick Links</h5>
                </div>
                <div className="mb-4 footer-links">
                  <ul>
                    <li>
                      <Link to="">About </Link>
                    </li>
                    <li>
                      <Link to="">Services </Link>
                    </li>
                    <li>
                      <Link to="">Work </Link>
                    </li>
                    <li>
                      <Link to="">Job History </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12">
              <div className="footer_widget">
                <div className="footer__widget-title">
                  <h5>Subscribe</h5>
                </div>
                <div className="mb-4 subscribe_container">
                  <Form>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Text id="basic-addon2">
                        <i className="fa fa-send"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form>
                </div>
                <div className="mb-4 subscribe_container">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="12" md="12" xs="12">
              <div className="footer-bottom_widget ">
                <p>Copyright @ 2024. All Right Reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
