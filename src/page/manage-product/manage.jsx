import { React, useEffect, useState } from "react";
import "./manage.css";
import axios from "axios";
import { useNavigate } from "react-router";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import NavbarAuth from "../../components/navbarAuth/navbarauth";
import ManageCards from "../../components/manage-card/manage-card";
import filter from "../../assets/icon/outline_filter_alt_black_24dp.png";
import plus from "../../assets/icon/plus.png";
import searchicon from "../../assets/icon/search.png";
import { login } from "../../store/reducer/user";

function Manage() {
  // const { isAuth } = useSelector((state) => state.users)
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({
    name:'name',
    description:'description',
    price:'password',
    category:'category',
    rating:'rating',
    stock:'stock',
    sold:'sold',
    image: null
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeInput = (event) => {
    event.preventDefault()
    const data = { ...product }
    data[event.target.name] = event.target.value
    setProduct(data)
}

const fileHandler = (event) => {
  event.preventDefault()
  const file = event.target.files[0]
  if (file) {
      const data = { ...product }
      data['image'] = file
      setProduct(data)
  }
}

const onSubmit = () => {
  const formData = new FormData()
  for (const key in product) {
      formData.append(key, product[key])
  }
 
  axios({
    method: 'POST',
    url: 'http://localhost:3001/product/add',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData
})
    .then((res) => {
        const {data} = res.data
        dispatch(login(data.token))
        // navigate('/admin')
    })
    .catch((err) => console.log(err))

}

 

  return (
    <>
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
                  />
                  <Button variant="primary" id="button-addon2">
                    <img
                      className="prod-search-size"
                      src={searchicon}
                      alt="btn-search"
                    />
                  </Button>
                </InputGroup>
              </Col>

              <div className="mng-btn-nav">
                <Button variant="outline-light">
                  <img className="prod-btn-size" src={filter} alt="box" />
                </Button>
              </div>

              <div className="mng-btn-blue">
                <Button onClick={handleShow} variant="primary">
                  <img className="prod-btn-plus" src={plus} alt="add-product" />
                </Button>
              </div>
            </Container>
          </Row>
        </Container>
        <Container>
          <ManageCards />
        </Container>
      </div>

      <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="mdl-font-title">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mng-mdl-padd" >
          <Row>
          <Col className="mng-mdl-col">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mdl-font-child" >Name</Form.Label>
              <Form.Control
              onChange={onChangeInput}
              name="name"
              className="mdl-input-grup"
                type="text"
                placeholder="Input name product ..."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mdl-font-child">Stock</Form.Label>
              <Form.Control
                onChange={onChangeInput}
                name="stock"
              className="mdl-input-grup"
                type="text"
                placeholder="Input stock product ..."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mdl-font-child">Category</Form.Label>
              <Form.Control
                onChange={onChangeInput}
                name="category"
              className="mdl-input-grup"
                type="text"
                placeholder="Input category product ..."
                autoFocus
              />
            </Form.Group>
           
          </Form>
          </Col>
          <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mdl-font-child">Price</Form.Label>
              <Form.Control
                onChange={onChangeInput}
                name="price"
              className="mdl-input-grup"
                placeholder="Input price product ..."
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mdl-font-child">Description</Form.Label>
              <Form.Control
                onChange={onChangeInput}
                name="description"
              className="mdl-input-grup"
                type="text"
                placeholder="Input description product ..."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mdl-font-child">{'Image (max 5)'}</Form.Label>
              <Form.Control
              onChange={fileHandler}
              className="mdl-input-grup"
                id="basic-addon2"
                type="file"
                placeholder="image"
                autoFocus
              />
            </Form.Group>
          </Form>
          </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Manage;
