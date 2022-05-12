import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./css/cartcontainer.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function CartItem({ item }) {
  const { id, image, name, price, amount } = item;
  
  return (
    <>
      <img className="img-fluid item_img" src={image} alt={name} />
      <div className="d-flex justify-content-around align-items-center">
        <span>{name}</span>
        <span>$ {price}</span>
        <a href={"detail/" + id}>
          <VisibilityIcon className="see" />
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <ExpandLessIcon
          className="increase"
        />
        <p className="amount">{amount}</p>
        <ExpandMoreIcon
          className="increase"
        />
      </div>
    </>
  );
}

export default CartItem;
