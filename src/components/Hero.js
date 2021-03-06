import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import "./css/hero.css";

function Hero() {
  return (
    <>
      <div className="app__hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-center">
              <div className="content">
                <h1 className="hero__title">Mountain Bicycle</h1>
                <p>Proactively look for obstacles</p>
                <button className="heroBtn">Shop now</button>
                <br />
                <br />
                <PlayCircleFilledIcon
                  className="video"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                />
                <br />
                <small className="play">Watch video</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                Bike
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                src="https://www.youtube.com/embed/mx_XkbrcU8c"
                frameBorder="0"
                width="100%"
                height="400px"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
