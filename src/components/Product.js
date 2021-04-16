import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { formatNumber } from '../utils/utils';

const Product = props => {
  const { product } = props;

  return (
    <Col md="4" xs="6" className="mb-4">
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
            <p>Rp. {formatNumber(product.price)}</p>
            <strong>{product.code}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
