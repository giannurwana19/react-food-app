import axios from 'axios';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_URL } from '../utils/constants';

class OrderComplete extends React.Component {
  componentDidMount() {
    this.getCarts();
  }

  getCarts = async () => {
    axios(`${API_URL}/carts`)
      .then(response => {
        const data = response.data;
        data.map(item => {
          return axios
            .delete(`${API_URL}/carts/${item.id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="complete.svg" width="400" />
        <h2 className="mt-4">Sukses Pesan</h2>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}

export default OrderComplete;
