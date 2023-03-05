import React from "react";
import "./search.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import searchicon from "../../assets/icon/search.png";

function Search() {
  return (
    <>
      <div>
        <InputGroup className="mb-3 src-search">
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2">
            <img className="hm-search-size" src={searchicon} alt="btn-search" />
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

export default Search;
