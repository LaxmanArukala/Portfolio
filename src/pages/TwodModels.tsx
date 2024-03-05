import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import glb from "../assets/3d/AvonniTableLamp.glb";
import lampPoster from "../assets/3dPosters/lamp.png";
import Card from "react-bootstrap/Card";
import blogOne from "../assets/images/blog/blog-01.png";

export default function TwodModels() {
  const modelRef = React.useRef();

  return (
    <>
      <section className="default-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" xs="12" className="mb-5">
              <h1 className="banner-heading">
                Explore{" "}
                <span className="text-highlight">Augmented Reality</span> in
                your browser
              </h1>
              <p className="mb-3">
                Powering 3D transformation and commerce growth through
                affordable, scalable, quality 3D and AR experiences
              </p>
              {/* <Button className="btn button-primary">Get my Work</Button>{" "} */}
            </Col>
            <Col lg="6" md="6" xs="12">
              <div id="showCase">
                <model-viewer
                  alt=""
                  src={glb}
                  ar
                  ar-scale="fixed"
                  ar-modes="scene-viewer webxr"
                  poster={lampPoster}
                  shadow-intensity="1"
                  max-camera-orbit="90deg auto 45deg"
                  camera-controls
                  touch-action="pan-y"
                  xr-environment
                ></model-viewer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="default-padding pt-0">
        <Container>
          <Row>
            <Col lg="12" md="12" xs="12" className="mb-5">
              <h4 className="banner-heading">
                Latest <span className="text-highlight">2D Demos</span>
              </h4>
            </Col>
            <Col lg="3" md="3" xs="12" className="mb-5">
              <Card>
                <Card.Img variant="top" src={blogOne} />
                <Card.Body>
                  <Card.Title className="text-white">Furniture</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="3" xs="12" className="mb-5">
              <Card>
                <Card.Img variant="top" src={blogOne} />
                <Card.Body>
                  <Card.Title className="text-white">Home Appliance</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="3" xs="12" className="mb-5">
              <Card>
                <Card.Img variant="top" src={blogOne} />
                <Card.Body>
                  <Card.Title className="text-white">Lamps</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
