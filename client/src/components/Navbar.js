import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#FDFD96" }}
      >
        <a className="navbar-brand" href="/">
          SunShine Pizza Co
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
           <div className="dropdown mt-2">
           <a className=" dropdown-bs-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             {currentUser.name}
           </a>
           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a className="dropdown-item" href="#">Order</a>
             <a className="dropdown-item" href="#" onClick={() => {
                      dispatch(logoutUser());
                    }}><li>Logout</li></a>
           </div>
         </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
