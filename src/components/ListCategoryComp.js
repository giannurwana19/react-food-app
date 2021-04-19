import { Component } from 'react';
import axios from 'axios';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { API_URL } from '../utils/constants';
import Icon from './Icon';

class ListCategoryComp extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    try {
      const { data } = await axios(`${API_URL}/categories`);

      this.setState({
        categories: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Col md="4" lg="2" className="mb-4">
        <h5>Daftar Kategori</h5>
        <hr />
        <Card>
          <ListGroup>
            {this.state.categories.map(category => (
              <ListGroup.Item
                key={category.id}
                onClick={() => this.props.changeCategory(category.name)}
                className={
                  this.props.choosedCategory === category.name &&
                  'active-category'
                }
                style={{ cursor: 'pointer' }}>
                <Icon name={category.name} />
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Col>
    );
  }
}

export default ListCategoryComp;
