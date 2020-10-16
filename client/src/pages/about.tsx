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
            <Carousel.Caption>
              <h3>Welcome to</h3>
              <h1>PATHWAYS</h1>
              <p>Take your next step in Cellular Agriculture.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Search the way you want</h3>
              <p>Start with Majors or Problems to Solve.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="img-3">
              <h3>Filter results</h3>
              <p>Filter based on your specific interests</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Find your passion</h3>
              <p>Look at the results and see where you can help.</p>
              <Button onClick={handleClose}>All Done Here</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal>
    </div>
  );
};
