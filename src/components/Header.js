import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login")
    return (
      <div className="header-container">
        <div>
          <img  className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" />
        </div>
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li>
                  <button class="login-btn" onClick={() => {
                    btnName==='Login'? setBtnName('Logout'): setBtnName('Login')
                  }}>{btnName}</button>
                </li>
            </ul>
        </div>
      </div>
    );
};


export default Header;