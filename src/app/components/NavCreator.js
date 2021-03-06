import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { logoutEndpoint } from '../services/auth-ws';
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';

const NavCreator = () => {
    const history = useHistory();

    const handleLogOut = () => {
        logoutEndpoint()
            .then(res => {
                localStorage.removeItem('data')
                history.push('/')
            })
            .catch()
    }

    return(
        <nav className="uk-navbar-container" uk-navbar='true'>
            <div className="uk-navbar-left">

                <a className="uk-navbar-item uk-logo" href="#">LogoC</a>

                <ul className="uk-navbar-nav">
                    <li>
                        <Link to = {{pathname :'/menuCreator/myDesigns'}}>My Designs</Link>
                    </li>
                    <li>
                        <Link to = {{pathname :'/menuCreator'}}>New Upload</Link>
                    </li>
                    <li>
                        <a href="#"  onClick={handleLogOut}>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavCreator