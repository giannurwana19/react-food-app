import { faPenAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
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
import Swal from 'sweetalert2';
import { API_URL } from '../utils/constants';
import { formatNumber } from '../utils/utils';

class CartDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.location.state.cart,
      total: this.props.location.state.cart.total,
      totalPrice: this.props.location.state.cart.totalPrice,
      description: this.props.location.state.cart.description || '',
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
    const newCart = {
      ...this.state.cart,
      total: this.state.total,
      totalPrice: this.state.totalPrice,
    };

    if (this.state.description.length !== 0) {
      newCart.description = this.state.description;
    }

    this.updateCart(newCart);
  };

  updateCart = cart => {
    axios
      .put(`${API_URL}/carts/${cart.id}`, cart)
      .then(() => {
        this.props.history.push('/');
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `${cart.product.name} berhasil diupdate!`,
          timer: 2500,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteCart = cart => {
    Swal.fire({
      title: 'Hapus Pesanan?',
      text: `${cart.product.name} bisa dipesan lagi di jika stok cukup!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/carts/${cart.id}`)
          .then(() => {
            this.props.history.push('/');
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: `${cart.product.name} berhasil dihapus!`,
              timer: 2500,
            });
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  render() {
    const { cart, total, description, totalPrice } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col md="6">
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
                  <Button
                    variant="danger"
                    className="ml-2"
                    onClick={() => this.deleteCart(cart)}>
                    <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
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
