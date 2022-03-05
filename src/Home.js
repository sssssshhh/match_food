import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColonSign, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';
import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

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
                    <Link to="/wine1">
                        <FontAwesomeIcon icon={faWineBottle} size="6x" style={{ color: 'DarkOrchid' }} />
                    </Link>
                </div>
                <div className="wine">
                    <Link to="/wine2">
                        <FontAwesomeIcon icon={faWineGlass} size="6x" style={{ color: 'DarkMagenta' }} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="wine">
                    <Link to="/wine3">
                        <FontAwesomeIcon icon={faWineGlassEmpty} size="6x" style={{ color: 'FireBrick' }} />
                    </Link>
                </div>
                <div className="wine">
                    <Link to="/wine4">
                        <FontAwesomeIcon icon={faMartiniGlass} size="6x" style={{ color: 'Indigo' }} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="wine">
                    <Link to="/wine5">
                        <FontAwesomeIcon icon={faFish} size="6x" style={{ color: 'MediumOrchid' }} />
                    </Link>
                </div>
                <div className="wine">
                    <Link to="/wine6">
                        <FontAwesomeIcon icon={faChampagneGlasses} size="6x" style={{ color: 'RebeccaPurple' }} />
                    </Link>
                </div>
            </div>
            <input type="text" placeholder="write the name of wine" autoFocus onKeyPress={getSearchKeyword}></input>
        </div>
    )
}

export default Home;