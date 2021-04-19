import React from 'react';
import { Badge, Col, ListGroup, Row, Card } from 'react-bootstrap';
import { formatNumber } from '../utils/utils';
import Payment from './Payment';

class ResultComp extends React.Component {
  pushToCartDetail = cart => {
    this.props.history.push({
      pathname: `cart-detail/${cart.id}`,
      state: { cart },
    });
  };

  render() {
    return (
      <Col lg="3">
        <h5>Hasil</h5>
        <hr />
        <Card className="overflow-auto result">
          <ListGroup>
            {this.props.carts.map(cart => (
              <ListGroup.Item
                style={{ cursor: 'pointer' }}
                key={cart.id}
                onClick={() => this.pushToCartDetail(cart)}>
                <Row>
                  <Col xs="2">
                    <h5>
                      <Badge pill variant="success">
                        {cart.total}
                      </Badge>
                    </h5>
                  </Col>
                  <Col>
                    <h6>{cart.product.name}</h6>
                    <p>Rp. {formatNumber(cart.product.price)}</p>
                  </Col>
                  <Col>
                    <strong className="float-right">
                      Rp. {formatNumber(cart.totalPrice)}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        <Payment carts={this.props.carts} {...this.props} />
      </Col>
    );
  }
}

export default ResultComp;

// h: DOKUMENTASI

// <Payment carts={this.props.carts} {...this.props} />
// kita oper props nya dari component -> Home -> ResultComp -> Payment
// agar dapat props.history.push
// agar payment bisa redirect halaman
