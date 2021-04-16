import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ListCategoryComp, NavbarComp, ResultComp } from './components';
import './App.css';
import axios from 'axios';
import { API_URL } from './utils/constants';
import Product from './components/Product';

class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    try {
      const { data } = await axios(`${API_URL}/products`);

      this.setState({
        products: data,
      });
    } catch (error) {
      console.log(error, 'error ya');
    }
  };

  render() {
    return (
      <>
        <NavbarComp />
        <Container fluid>
          <Row>
            <ListCategoryComp />
            <Col>
              <h4>Daftar Produk</h4>
              <hr />
              <Row>
                {this.state.products.map(product => {
                  return <Product key={product.id} product={product} />;
                })}
              </Row>
            </Col>
            <ResultComp />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
