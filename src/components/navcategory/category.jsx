import React from "react";
import "./category.css";
import { Nav } from "react-bootstrap";

function Category({ handleFilter, getAll }) {
  const handleClick = (category) => {
    handleFilter(category);
  };
  return (
    <Nav className="navcat-bg" variant="pills" defaultActiveKey="#all">
      <Nav.Item>
        <Nav.Link eventKey="link-0" href="#all" onClick={getAll}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-1"
          href="#phone"
          onClick={() => handleClick("phone")}
        >
          Phone
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          href="#laptop"
          onClick={() => handleClick("laptop")}
        >
          Laptop
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-3"
          href="#headphone"
          onClick={() => handleClick("headphone")}
        >
          Headphone
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Category;
