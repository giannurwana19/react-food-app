import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Row } from 'react-bootstrap';
import { formatNumber } from '../utils/utils';
import axios from 'axios';
import { API_URL } from '../utils/constants';

class Payment extends React.Component {
  handleTotalPrice = price => {
    const orders = {
      totalPrice: price,
      product: this.props.carts,
    };

    axios
      .post(`${API_URL}/orders`, orders)
      .then(() => {
        this.props.history.push('order-complete');
      })
      .catch(error => console.log(error));
  };

  render() {
    const totalPayment = this.props.carts.reduce((result, item) => {
      return result + item.totalPrice;
    }, 0);

    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="bg-white">
            <strong>
              Total Harga:
              <span className="float-right mr-3">
                Rp. {formatNumber(totalPayment)}
              </span>
            </strong>
            <Button
              variant="primary"
              block
              className="my-3"
              onClick={() => this.handleTotalPrice(totalPayment)}>
              <FontAwesomeIcon icon={faShoppingCart} /> Bayar
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Payment;
