import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { formatNumber } from '../utils/utils';

const Product = props => {
  const { product } = props;

  return (
    <Col lg="4" md="6" sm="6" xs="12" className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={`images/${product.category.name.toLowerCase()}/${
            props.product.image
          }`}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Rp. {formatNumber(product.price)}
            <br />
            <strong>{product.code}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
