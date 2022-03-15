import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faCheese } from '@fortawesome/free-solid-svg-icons';
import { faLemon } from '@fortawesome/free-solid-svg-icons';

import { Link, useNavigate } from 'react-router-dom';

import 'wine.css';

const Home = () => {
    const navigate = useNavigate();

    const getSearchKeyword = (event) => {
        // when enter
        if (event.charCode === 13) {
            const { target: { value } } = event;
            navigate(`/searching${value}`);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="wine">
                    <Link to="/lemon">
                        <FontAwesomeIcon icon={faLemon} size="6x" style={{ color: 'Yellow' }} />
                    </Link>
                </div>
                <div className="wine">
                    <Link to="/wine">
                        <FontAwesomeIcon icon={faWineGlass} size="6x" style={{ color: 'DarkMagenta' }} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="wine">
                    <Link to="/icecream">
                        <FontAwesomeIcon icon={faIceCream} size="6x" style={{ color: 'RosyBrown' }} />
                    </Link>
                </div>
                <div className="wine">
                    <Link to="/martini">
                        <FontAwesomeIcon icon={faMartiniGlass} size="6x" style={{ color: 'MediumTurquoise' }} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="wine">
                    <Link to="/fish">
                        <FontAwesomeIcon icon={faFish} size="6x" style={{ color: 'RoyalBlue' }} />
                    </Link>
                </div>
                <div className="wine">
                    <Link to="/cheese">
                        <FontAwesomeIcon icon={faCheese} size="6x" style={{ color: 'Orange' }} />
                    </Link>
                </div>
            </div>
            <input className="search" type="text" placeholder="CLICK HERE" autoFocus onKeyPress={getSearchKeyword}></input>
        </div>
    )
}

export default Home;