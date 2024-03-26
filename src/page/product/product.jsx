import { React, useState, useEffect } from "react";
import "./product.css";
import Cards from "../../components/cards/cards";
import NavbarAuth from "../../components/navbarAuth/navbarauth";
import { Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import searchicon from "../../assets/icon/search.png";
import Category from "../../components/navcategory/category";
import useApi from "../../helpers/useApi";

function Product() {
  const api = useApi();
  const [product, setProduct] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const getAll = async () => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: "/product/all",
      });
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearch = async (search = "") => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: `/product/search?s=${search}`,
      });
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async (category = "") => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: `/product/category/${category}`,
      });
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSort = async () => {
    try {
      const { data } = await api.requests({
        method: "GET",
        url: `/product/sort?by=${sortBy}&order=${sortOrder}`,
      });
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getCategory(filterCategory);
  // }, [filterCategory]);

  useEffect(() => {
    getAll();
    getCategory(filterCategory);
  }, [filterCategory]);

  return (
    <div>
      <NavbarAuth />
      <Container>
        <Row>
          <Container className="prod-dspl">
            <Col>
              <InputGroup className="mb-3 prod-search">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  onClick={() => getSearch(searchKeyword)}
                >
                  <img
                    className="prod-search-size"
                    src={searchicon}
                    alt="btn-search"
                  />
                </Button>
              </InputGroup>
            </Col>

            {/* <div className="prod-btn-nav">
              <Button variant="outline-light">
                <img className="prod-btn-size" src={cart} alt="box" />
              </Button>
            </div>

            <div className="prod-btn-nav">
              <Button variant="outline-light">
                <img className="prod-btn-size" src={filter} alt="box" />
              </Button>
            </div> */}
          </Container>
        </Row>

        <Form>
          <Row>
            <Col>
              <Category handleFilter={setFilterCategory} getAll={getAll} />
            </Col>
            <Col>
              <Form.Select onChange={(e) => setSortBy(e.target.value)}>
                <option value="1">BY</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
                <option value="stock">Stock</option>
              </Form.Select>
            </Col>
            <Col className="mx=3">
              <Form.Select onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">ORDER</option>
                <option value="desc">ASC</option>
                <option value="asc">DESC</option>
              </Form.Select>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="hm-clr-btn"
                onClick={() => getSort()}
              >
                Sort
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          {product.map((v) => {
            return (
              <Cards
                id={v.id}
                name={v.name}
                price={v.price}
                image={v.image}
                slug={v.slug}
                category={v.category}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Product;
