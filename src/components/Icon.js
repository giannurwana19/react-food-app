import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faCoffee,
  faCheese,
} from '@fortawesome/free-solid-svg-icons';

const Icon = props => {
  if (props.name === 'Makanan') {
    return <FontAwesomeIcon className="mr-2" icon={faUtensils} />;
  } else if (props.name === 'Minuman') {
    return <FontAwesomeIcon className="mr-2" icon={faCoffee} />;
  } else if (props.name === 'Cemilan') {
    return <FontAwesomeIcon className="mr-2" icon={faCheese} />;
  } else {
    return;
  }
};

export default Icon;
