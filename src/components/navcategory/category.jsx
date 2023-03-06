import React from "react";
import './category.css'
import { Nav } from "react-bootstrap";

function Category() {
  return (
    <Nav className="navcat-bg" variant="pills" defaultActiveKey="#">
      <Nav.Item>
        <Nav.Link href="#">Headphone</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="#airconditioner">
          Air Conditioner
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="#television">
          Television
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" href="#router">
          Router
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Category;
