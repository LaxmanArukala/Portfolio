import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import background from "../assets/images/about-bg.webp";
import aboutImage from "../assets/images/about-01.png";
import bannerRight from "../assets/images/owner.png";
import towerShape from "../assets/images/tower-shape.png";

export function Home() {
  return (
    <>
      {/* style={{ backgroundImage: `url(${background})` }} */}
      <section className="default-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" md="7" xs="12" className="mb-5">
              <h1 className="banner-heading">
                Hi, I’m <span className="sub-banner-title">Laxman Arukala</span>
              </h1>
              <p>
                We are a creative agency that specializes in providing
                high-quality design and branding solutions to design and coding.
              </p>
              <Button className="btn button-primary">Get my Work</Button>{" "}
            </Col>
            <Col lg="5" md="5" xs="12">
              <div className="banner__thumb-wrapper wow fadeInRight">
                <div className="banner__shape">
                  <img
                    className="banner__shape-one"
                    src={towerShape}
                    alt="image not found"
                  />
                </div>
                {/* <div className="banner__bg"></div> */}
                <div className="banner__thumb">
                  <img src={bannerRight} alt="Owner Image" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-padding bg-theme-secondary about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" xs="12">
              <div className="about_section-wrapper">
                <div className="about_image_thumb">
                  <img src={aboutImage} alt="" title="" />
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" xs="12">
              <p className="fs-4 text-highlight">About me</p>
              <h1 className=" banner-heading">About me</h1>
              <p>
                Experienced web UI developer with 5+ years of hands-on expertise
                in designing, developing, and maintaining dynamic web
                applications. Adept at collaborating with cross-functional teams
                to drive project success. Seeking a challenging position where I
                can leverage my advanced proficiency in Angular JS, React JS to
                contribute to the development and enhancement of innovative web
                solutions. Committed to staying abreast of industry trends and
                continuously refining skills to deliver cutting-edge,
                user-friendly applications.
              </p>
              <Button className="btn button-primary me-2 mb-3">
                Download Resume
              </Button>{" "}
              <Button className="btn button-blue ">Hire me</Button>{" "}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="default-padding services-section">
        <Container>
          <Row className="text-center">
            <Col lg="12" md="12" xs="12" className="mb-5">
              <p className="fs-4 text-highlight">My Services</p>
              <h1 className=" banner-heading">Professional Services</h1>
              <p>
                We are a creative agency that specializes in providing
                high-quality design and branding solutions to design and coding.
              </p>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <i className="fa fa-mobile"></i>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">UX/UI Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <i className="fa fa-mobile"></i>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">UX/UI Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <i className="fa fa-mobile"></i>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">UX/UI Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <i className="fa fa-mobile"></i>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">UX/UI Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <i className="fa fa-mobile"></i>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">UX/UI Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <i className="fa fa-mobile"></i>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">UX/UI Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
