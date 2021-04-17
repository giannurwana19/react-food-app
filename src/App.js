import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ListCategoryComp, NavbarComp, ResultComp } from './components';
import './App.css';
import axios from 'axios';
import { API_URL } from './utils/constants';
import Product from './components/Product';
import Swal from 'sweetalert2';

class App extends React.Component {
  state = {
    products: [],
    choosedCategory: 'Makanan',
    carts: [],
  };

  componentDidMount() {
    this.getProducts(`products?category.name=${this.state.choosedCategory}`);
    this.getCarts();
  }

  componentDidUpdate(prevState) {
    if (this.state.carts !== prevState.carts) {
      this.getCarts();
    }
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

  getCarts = async () => {
    try {
      const { data } = await axios(`${API_URL}/carts`);

      this.setState({
        carts: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  storeCart = async product => {
    axios(`${API_URL}/carts?product.id=${product.id}`).then(response => {
      if (response.data.length === 0) {
        let cartProduct = {
          total: 1,
          totalPrice: product.price,
          product,
        };

        axios
          .post(`${API_URL}/carts`, cartProduct)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: `${cartProduct.product.name} ditambahkan ke dalam keranjang!`,
              timer: 2500,
            });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        let cartProduct = {
          total: response.data[0].total + 1,
          totalPrice: response.data[0].totalPrice + product.price,
          product,
        };

        axios
          .put(`${API_URL}/carts/${response.data[0].id}`, cartProduct)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: `${cartProduct.product.name} ditambahkan ke dalam keranjang!`,
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
                  return (
                    <Product
                      key={product.id}
                      product={product}
                      storeCart={this.storeCart}
                    />
                  );
                })}
              </Row>
            </Col>
            <ResultComp carts={this.state.carts} />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
