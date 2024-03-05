import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
// import background from "../assets/images/about-bg.webp";
import aboutImage from "../assets/images/about-01.png";
import bannerRight from "../assets/images/owner.png";
import towerShape from "../assets/images/tower-shape.png";
import academyImage from "../assets/images/website-1.png";
import immersionImage from "../assets/images/website-2.png";
import arImage from "../assets/images/website-3.png";
import reactImage from "../assets/images/skills/react.svg";
import jsImage from "../assets/images/skills/js.svg";
import angularImage from "../assets/images/skills/angular.svg";
import nodeImage from "../assets/images/skills/nodejs.svg";
import bootstrapImage from "../assets/images/skills/bootstrap.svg";
import { Conatct } from "../components/ContactUs";
import Card from "react-bootstrap/Card";
import blogOne from "../assets/images/blog/blog-01.png";
import blogTwo from "../assets/images/blog/blog-02.png";
import { Link } from "react-router-dom";

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
              <p className="mb-3">
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
              <h1 className=" banner-heading">
                Crafting stories through design and innovation
              </h1>
              <p className="mb-3">
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
              <Button className="btn button-blue mb-3">Hire me</Button>{" "}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="default-padding services-section">
        <Container>
          <Row className="text-center">
            <Col lg="12" md="12" xs="12" className="mb-5 text-start">
              <p className="fs-4 text-highlight">My Services</p>
              <h1 className=" banner-heading">
                Bringing your vision to life with precision & passion
              </h1>
              <p>
                We are a creative agency that specializes in providing
                high-quality design and branding solutions to design and coding.
              </p>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card bordered-style">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="null"
                      className=""
                    >
                      <path
                        d="M8.92993 2L8.95993 3.53003C8.97993 4.34003 9.64993 5 10.4599 5H13.4799C14.3099 5 14.9799 4.32 14.9799 3.5V2"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M17 17L15 19L17 21"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M20 17L22 19L20 21"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">Website Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card bordered-style">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="null"
                      className="img-fluid w-100 svg replaced-svg"
                    >
                      <path
                        d="M10.75 22.5001H13.27C14.23 22.5001 14.85 21.8201 14.67 20.9901L14.26 19.1802H9.75999L9.35 20.9901C9.17 21.7701 9.85 22.5001 10.75 22.5001Z"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M14.26 19.1702L15.99 17.6301C16.96 16.7701 17 16.1701 16.23 15.2001L13.18 11.3302C12.54 10.5202 11.49 10.5202 10.85 11.3302L7.8 15.2001C7.03 16.1701 7.02999 16.8001 8.03999 17.6301L9.77 19.1702"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12.01 11.1201V13.6501"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12.52 5H11.52C10.97 5 10.52 4.55 10.52 4V3C10.52 2.45 10.97 2 11.52 2H12.52C13.07 2 13.52 2.45 13.52 3V4C13.52 4.55 13.07 5 12.52 5Z"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M3.27 14.17H4.27C4.82 14.17 5.27 13.72 5.27 13.17V12.17C5.27 11.62 4.82 11.1699 4.27 11.1699H3.27C2.72 11.1699 2.27 11.62 2.27 12.17V13.17C2.27 13.72 2.72 14.17 3.27 14.17Z"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M20.73 14.17H19.73C19.18 14.17 18.73 13.72 18.73 13.17V12.17C18.73 11.62 19.18 11.1699 19.73 11.1699H20.73C21.28 11.1699 21.73 11.62 21.73 12.17V13.17C21.73 13.72 21.28 14.17 20.73 14.17Z"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10.52 3.56006C6.71 4.01006 3.75 7.24004 3.75 11.17"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M20.25 11.17C20.25 7.25004 17.31 4.03006 13.52 3.56006"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">Logo Design</h5>
                    <p>
                      Start with a brief introduction about your a yourself.
                      Mention your name, your current role or status .
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <div className="service-card bordered-style">
                <div className="card-body">
                  <span className="service__icon-wrap">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="null"
                      className="img-fluid w-100 svg replaced-svg"
                    >
                      <path
                        d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11 4.5H7"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.99995 18.1C9.85599 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85599 15 8.99995 15C8.14391 15 7.44995 15.694 7.44995 16.55C7.44995 17.406 8.14391 18.1 8.99995 18.1Z"
                        stroke="#e13d4f"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <div className="service-content">
                    <h5 className="service__title">App Development</h5>
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
      <section className="default-padding work-section bg-theme-secondary">
        <Container>
          <Row className="text-center">
            <Col lg="12" md="12" xs="12" className="mb-5 text-start">
              <p className="fs-5 text-highlight">MY RECENT PORTFOLIO</p>
              <h1 className=" banner-heading">Check My Latest Works</h1>
              <p>
                We are a creative agency that specializes in providing
                high-quality design and branding solutions to design and coding.
              </p>
            </Col>
            <Col lg="6" md="6" xs="12" className="mb-5">
              <div className="work-image-item">
                <div className="work-image-thumb">
                  <a
                    href="https://www.academyoflifesupport.com/"
                    target="_blank"
                  >
                    <img src={academyImage} alt="" title="" className="" />
                  </a>
                  {/* <div className="work-overlay-container">
                    <div className="work-content-box">
                      <h4 className="fs-5 mb-0">Academy of Life Support</h4>
                    </div>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" xs="12" className="mb-5">
              <div className="work-image-item">
                <div className="work-image-thumb">
                  <a href="https://www.immersionslabs.com/" target="_blank">
                    <img src={immersionImage} alt="" title="" className="" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" xs="12" className="mb-5">
              <div className="work-image-item">
                <div className="work-image-thumb">
                  <a href="https://ar.immersionslabs.com/home" target="_blank">
                    <img src={arImage} alt="" title="" className="" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="default-padding education-section"
        id="educationSection"
      >
        <Container>
          <Row className="text-center">
            <Col lg="12" md="12" xs="12" className="mb-5 text-start">
              <p className="fs-5 text-highlight">EDUCATION & SKILL</p>
              <h1 className=" banner-heading">
                I'm great in what I do and I'm loving it
              </h1>
              <p>
                We are a creative agency that specializes in providing
                high-quality design and branding solutions to design and coding.
              </p>
            </Col>
            <Col lg="12" md="12" xs="12" className="mb-5">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="pills" className="">
                  <Nav.Item>
                    <Nav.Link eventKey="first">My Experiance</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">My Education</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first" className="mt-5">
                    <Row className="text-start">
                      <Col lg="6" md="6" xs={12} sm={12} className="mb-4">
                        <div className="education-card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start">
                              <span className="me-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-chevron-double-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                </svg>
                              </span>
                              <div>
                                <h3 className="text-uppercase">
                                  Immersion Software Labs
                                </h3>
                                <h2>Web UI/UX Developer</h2>
                                <h4 className="text-highlight">
                                  March 2021 - Present
                                </h4>
                                <p>
                                  Nemo enim ipsam voluptatem quia voluptas sit
                                  aspernatur aut odit aut fugit sed thisnquia
                                  consequuntur magni dolores eos qui ratione
                                  voluptatem sequi nesciunt
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs={12} sm={12} className="mb-4">
                        <div className="education-card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start">
                              <span className="me-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-chevron-double-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                </svg>
                              </span>
                              <div>
                                <h3 className="text-uppercase">
                                  Signer Tech It solutions PVT LTD
                                </h3>
                                <h2>UI Developer</h2>
                                <h4 className="text-highlight">
                                  July 2019 - March 2021
                                </h4>
                                <p>
                                  Nemo enim ipsam voluptatem quia voluptas sit
                                  aspernatur aut odit aut fugit sed thisnquia
                                  consequuntur magni dolores eos qui ratione
                                  voluptatem sequi nesciunt
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs={12} sm={12} className="mb-4">
                        <div className="education-card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start">
                              <span className="me-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-chevron-double-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                </svg>
                              </span>
                              <div>
                                <h3 className="text-uppercase">
                                  Nevexa Digital Private Limited
                                </h3>
                                <h2>UI Developer</h2>
                                <h4 className="text-highlight">
                                  July 2018 - July 2019
                                </h4>
                                <p>
                                  Nemo enim ipsam voluptatem quia voluptas sit
                                  aspernatur aut odit aut fugit sed thisnquia
                                  consequuntur magni dolores eos qui ratione
                                  voluptatem sequi nesciunt
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="mt-5">
                    <Row className="text-start">
                      <Col lg="6" md="6" xs={12} sm={12} className="mb-4">
                        <div className="education-card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start">
                              <span className="me-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-chevron-double-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                </svg>
                              </span>
                              <div>
                                <h3 className="text-uppercase">
                                  Priyadarshini College of Computer Science &
                                  Research
                                </h3>
                                <h2>Master of Computer Application</h2>
                                <h4 className="text-highlight">2015-2018</h4>
                                <p>Osmania University, Hyderabad</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6" md="6" xs={12} sm={12} className="mb-4">
                        <div className="education-card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start">
                              <span className="me-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-chevron-double-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                  />
                                </svg>
                              </span>
                              <div>
                                <h3 className="text-uppercase">
                                  Sree Chaitanya Degree & PG College
                                </h3>
                                <h2>Bachelor Degree</h2>
                                <h4 className="text-highlight">2011-2014</h4>
                                <p>Satavahana University, Karimnagar</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="default-padding skills-section bg-theme-secondary"
        id="skillSection"
      >
        <Container>
          <Row className="text-center">
            <Col lg="12" md="12" xs="12" className="mb-5 text-start">
              <p className="fs-5 text-highlight">DESIGN EXPERIENCE</p>
              <h1 className=" banner-heading">Design Skills</h1>
              <p>
                We are a creative agency that specializes in providing
                high-quality design and branding solutions to design and coding.
              </p>
            </Col>
            <Col lg="2" md="2" xs="12" className="mb-5 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="icon-box">
                    <img src={jsImage} alt="" title="" />
                  </div>
                  <p className="fs-6 mt-3">JavaScript</p>
                </div>
              </div>
            </Col>
            <Col lg="2" md="2" xs="12" className="mb-5 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="icon-box">
                    <img src={reactImage} alt="" title="" />
                  </div>
                  <p className="fs-6 mt-3">React</p>
                </div>
              </div>
            </Col>
            <Col lg="2" md="2" xs="12" className="mb-5 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="icon-box">
                    <img src={angularImage} alt="" title="" />
                  </div>
                  <p className="fs-6 mt-3">Angular</p>
                </div>
              </div>
            </Col>
            <Col lg="2" md="2" xs="12" className="mb-5 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="icon-box">
                    <img src={nodeImage} alt="" title="" />
                  </div>
                  <p className="fs-6 mt-3">Node JS</p>
                </div>
              </div>
            </Col>
            <Col lg="2" md="2" xs="12" className="mb-5 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="icon-box">
                    <img src={bootstrapImage} alt="" title="" />
                  </div>
                  <p className="fs-6 mt-3">Bootstrap</p>
                </div>
              </div>
            </Col>
            {/* <Col lg="2" md="2" xs="12" className="mb-5 text-center">
              <div className="card">
                <div className="card-body">
                  <div className="icon-box">
                    <img src={bootstrapImage} alt="" title="" />
                  </div>
                  <p className="fs-6 mt-3">React Bootstrap</p>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="default-padding education-section" id="blogSection">
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12" className="mb-5 text-start">
              <p className="fs-5 text-highlight">My Blog</p>
              <h1 className=" banner-heading">Read My Latest Blog</h1>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <Card>
                <Card.Img variant="top" src={blogOne} />
                <Card.Body>
                  <Card.Title className="text-white">
                    The Impact of Micro interactions User Engagement
                  </Card.Title>
                  <Card.Text className="mb-4">
                    Explore how subtle micro interactions can enhance user and
                    satisfaction Stay up to-date with the latest trends in web
                    develop including new technologies
                  </Card.Text>
                  <Link to="" className="text-highlight">
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4" md="4" xs="12" className="mb-5">
              <Card>
                <Card.Img variant="top" src={blogTwo} />
                <Card.Body>
                  <Card.Title className="text-white">
                    Share Their Office Relocation on Digital Platforms
                  </Card.Title>
                  <Card.Text className="mb-4">
                    Our decision to move from our growth and providing an even
                    better experience for our clients and team members. This
                    move allows us to expand our
                  </Card.Text>
                  <Link to="" className="text-highlight">
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Conatct />
    </>
  );
}
