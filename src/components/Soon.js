import React from "react";
import denim from '../images/denim.png'
import shirt from '../images/shirt.png'
import shoe from '../images/shoe.png'
import watch from '../images/watch.png'
import './css/soon.css'

function Soon() {
  return (
    <>
      <div className="app__soon">
        <div className="container-fluid">
          <h4 className="coming">Coming Soon</h4>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img className="img-fluid item_img" src={denim} alt="" />
                <div className="d-flex justify-content-around">
                  <span>Denim Jacket</span>
                  <span>$30</span>
                </div>
                <button className="btn2">View Item</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="img-fluid item_img" src={shirt} alt="" />
                <div className="d-flex justify-content-around">
                  <span>Denim Jacket</span>
                  <span>$30</span>
                </div>
                <button className="btn2">View Item</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="img-fluid item_img" src={watch} alt="" />
                <div className="d-flex justify-content-around">
                  <span>Denim Jacket</span>
                  <span>$30</span>
                </div>
                <button className="btn2">View Item</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img className="img-fluid item_img" src={shoe} alt="" />
                <div className="d-flex justify-content-around">
                  <span>Denim Jacket</span>
                  <span>$30</span>
                </div>
                <button className="btn2">View Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Soon;