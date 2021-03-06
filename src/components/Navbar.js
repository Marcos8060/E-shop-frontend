import React, { useEffect, useState, useRef } from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { GlobalContext } from "../context";

function Navbar() {
  const { state: { cart },dispatch} = GlobalContext();
  const [navBackground, setNavBackground] = useState(false);
  const [total,setTotal] = useState()
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <div className="app__navbar">
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{
            transition: "1s ease",
            backgroundColor: navBackground ? "#F8CA4C" : "transparent",
          }}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              <h1 className="logo">Bike</h1>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MenuIcon className="menu" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <ShoppingBasketIcon className="cart" />
                    <span className="quantity">{cart.length}</span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {cart.map((item) => (
                      <>
                        <div className="toCart">
                          <img
                            className="img-fluid toCartImg"
                            src={item.image}
                            alt=""
                          />
                          <div>
                            <span>{item.name}</span>
                            <br />
                            <span>$ {item.price}</span>
                          </div>
                          <DeleteIcon 
                          onClick={()=>{
                            dispatch({
                              type: 'REMOVE',
                              payload: item
                            })
                          }}
                          className="delete" />
                        </div>
                        <hr />
                      </>
                    ))}
                    <div className=" total1 d-flex justify-content-between align-items-center">
                      <p>Total</p>
                      <p>$ {total}</p>
                    </div>
                    <hr />
                    <Link to='/cart' className="btn9 text-decoration-none">Go to cart</Link>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
