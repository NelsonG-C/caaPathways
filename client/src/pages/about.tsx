import React from "react";
import { Button, Modal, Carousel } from "react-bootstrap";
import bg from "../bg.jpg";

// trying as a modal

export const AboutPage = (props: any) => {
  const { show, handleClose } = props;
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Carousel interval={50000}>
          <Carousel.Item>
            <img className="d-block w-100" src={bg} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bg} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bg} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
            <Button onClick={handleClose}>All Done Here</Button>
          </Carousel.Item>
        </Carousel>
      </Modal>
    </div>
  );
};
