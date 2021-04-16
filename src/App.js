import { Container } from 'react-bootstrap';
import './App.css';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <>
      <NavbarComp />
      <Container>
        <h1>Halo ini navbar comp</h1>
      </Container>
    </>
  );
}

export default App;
