import React from "react";
import logo from "./Logo1.png";
import { Foot, Content } from "../style/footerStyle";

function Footer() {
  return (
    <>
      <Foot>
        <Content>
          <div>
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <p>
              {" "}
              <br />
              91 Spring Dr. Hudsonville, MI 49426
            </p>
            <hr /> <br />
            <p>2022 My Lectronic. All rights reserved</p>
          </div>
          <ul>
            {" "}
            How it Works
            <li>Select Product</li>
            <li>Make Payment</li>
            <li>Receive Product</li>
          </ul>
          <ul>
            {" "}
            Product
            <li>Headphone</li>
            <li>Air Conditioner</li>
            <li>Router</li>
            <li>Television</li>
          </ul>
          <ul>
            {" "}
            Help
            <li>About</li>
            <li>Contact Us</li>
            <li>Download App</li>
            <li>FAQs</li>
          </ul>
        </Content>
      </Foot>
    </>
  );
}

export default Footer;
