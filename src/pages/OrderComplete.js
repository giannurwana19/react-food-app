import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderComplete = () => {
  return (
    <div className="mt-4 text-center">
      <Image src="complete.svg" width="400" />
      <h2 className="mt-4">Sukses Pesan</h2>
      <Button variant="primary" as={Link} to="/">
        Kembali
      </Button>
    </div>
  );
};

export default OrderComplete;
