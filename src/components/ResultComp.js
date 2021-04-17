import { Component } from 'react';
import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { formatNumber } from '../utils/utils';

class ResultComp extends Component {
  render() {
    return (
      <Col lg="3">
        <h5>Hasil</h5>
        <hr />
        <ListGroup>
          {this.props.carts.map(cart => (
            <ListGroup.Item key={cart.id}>
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
                  <strong class="float-right">Rp. {formatNumber(cart.totalPrice)}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    );
  }
}

export default ResultComp;
