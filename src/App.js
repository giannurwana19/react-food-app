import { Container, Row } from 'react-bootstrap';
import {
  ListCategoryComp,
  ListProductComp,
  NavbarComp,
  ResultComp,
} from './components';
import './App.css';

function App() {
  return (
    <>
      <NavbarComp />
      <Container fluid>
        <Row>
          <ListCategoryComp />
          <ListProductComp />
          <ResultComp />
        </Row>
      </Container>
    </>
  );
}

export default App;
