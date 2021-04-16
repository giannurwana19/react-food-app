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
    choosedCategory: 'Makanan',
  };

  componentDidMount() {
    this.getProducts(`products?category.name=${this.state.choosedCategory}`);
  }

  changeCategory = value => {
    this.setState(
      {
        choosedCategory: value,
        products: [],
      },
      () => {
        this.getProducts(`products?category.name=${value}`);
      }
    );
  };

  getProducts = async (url = 'products') => {
    try {
      const { data } = await axios(`${API_URL}/${url}`);

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
            <ListCategoryComp
              changeCategory={this.changeCategory}
              choosedCategory={this.state.choosedCategory}
            />
            <Col md>
              <h5>Daftar Produk</h5>
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
