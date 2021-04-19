import { faPenAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  Card,
  Container,
  Button,
  Row,
  Col,
  Form,
  Image,
} from 'react-bootstrap';
import { formatNumber } from '../utils/utils';

class CartDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.location.state.cart,
      total: this.props.location.state.cart.total,
      totalPrice: this.props.location.state.cart.totalPrice,
      description: '',
    };
  }

  handleMinus = () => {
    if (this.state.total > 1) {
      this.setState(state => ({
        total: state.total - 1,
        totalPrice: state.totalPrice - state.cart.product.price,
      }));
    }
  };

  handlePlus = () => {
    this.setState(state => ({
      total: state.total + 1,
      totalPrice: state.totalPrice + state.cart.product.price,
    }));
  };

  handleChange = e => {
    this.setState({
      description: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    const { cart, total, description, totalPrice } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col md="5">
            <Card>
              <Card.Header>Edit Pesanan</Card.Header>
              <Card.Body>
                <Card.Title>
                  {cart.product.code} | {cart.product.name}
                </Card.Title>
                <Card.Text>
                  Harga Satuan: Rp. {formatNumber(cart.product.price)}
                </Card.Text>
                <hr />
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="exampleForm.ControlForm1">
                    <Form.Label>Total Harga</Form.Label>
                    <p>
                      <strong>Rp. {formatNumber(totalPrice)}</strong>
                    </p>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlForm2">
                    <Form.Label>Jumlah: </Form.Label>
                    <br />
                    <Button size="sm" onClick={this.handleMinus}>
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                    <strong className="mx-3">{total} Porsi</strong>
                    <Button size="sm" onClick={this.handlePlus}>
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      value={description}
                      onChange={this.handleChange}
                      placeholder="Pedas, Nasi Setengah..."
                      rows={3}
                    />
                  </Form.Group>
                  <Button variant="success" type="submit">
                    <FontAwesomeIcon icon={faPenAlt} /> Update
                  </Button>
                  <Button variant="danger" className="ml-2">
                    <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Image
              src={`http://localhost:3000/images/${cart.product.category.name.toLowerCase()}/${
                cart.product.image
              }`}
              thumbnail
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CartDetail;
