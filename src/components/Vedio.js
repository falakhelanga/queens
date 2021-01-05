import React from "react";
import "./vedio.css";
import { Carousel, Image } from "react-bootstrap";

const Vedio = () => {
  return (
    <div>
      {/**    MOBILE HEADER ****/}
      <div className="video_container_mobile">
        <video
          src="/vedios/backgroundvid.mp4"
          loop={true}
          autoPlay="true"
          muted
        ></video>
        <div
          className="vid_content"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            alignItems: "center",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
            zIndex: "1",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="cont w-50 ">
            <p
              className="text-white "
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Welcome to Queens Corner Glam
            </p>
            <p
              className=" mt-5 "
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "gold",
              }}
            >
              Brazilian Hair from 60% OFF
            </p>
            <button
              style={{
                border: "1px solid gold",
                backgroundColor: "transparent",
                padding: "5px 20px",
                borderRadius: "50px",
                color: "white",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/**    DESKTOP HEADER ****/}

      <div className="desktop_hearder_container">
        <Carousel
          style={{
            position: "relative",
          }}
        >
          <Carousel.Item
            className="car_item"
            style={{
              position: "relative",
              backgroundColor: "pink",
            }}
          >
            <Image
              fluid
              className="d-block car_img "
              src="/images/carItem.jpeg"
              alt="First slide"
            />
            <Carousel.Caption className="cap">
              <h1
                style={{
                  fontWeight: "bolder",
                }}
              >
                New Arrivals From 30% OFF
              </h1>
              <button
                style={{
                  border: "1px solid silver",
                  backgroundColor: "rgba(0,0,0,0.78)",
                  padding: "5px 20px",
                  borderRadius: "50px",
                  color: "white",
                  width: "180px",
                  fontWeight: "bolder",
                }}
              >
                Shop Now
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="car_item"
            style={{
              position: "relative",
              backgroundColor: "gold",
            }}
          >
            <Image
              fluid
              className="d-block car_img "
              src="/images/car_item2.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption className="cap">
              <h1
                style={{
                  fontWeight: "bolder",
                }}
              >
                Brazilian Hair From 30%OFF
              </h1>
              <button
                style={{
                  border: "1px solid silver",
                  backgroundColor: "rgba(0,0,0,0.78)",
                  padding: "5px 20px",
                  borderRadius: "50px",
                  color: "white",
                  width: "180px",
                  fontWeight: "bolder",
                }}
              >
                Shop Now
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            className="car_item"
            style={{
              position: "relative",
              backgroundColor: "purple",
            }}
          >
            <Image
              fluid
              className="d-block car_img "
              src="/images/car_item4.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption className="cap">
              <h1
                style={{
                  fontWeight: "bolder",
                }}
              >
                SUMMER SPECIALS FROM 10% OFF
              </h1>
              <button
                style={{
                  border: "1px solid silver",
                  backgroundColor: "rgba(0,0,0,0.78)",
                  padding: "5px 20px",
                  borderRadius: "50px",
                  color: "white",
                  width: "180px",
                  fontWeight: "bolder",
                }}
              >
                Shop Now
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Vedio;
