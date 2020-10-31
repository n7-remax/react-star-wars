import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


function WelcomePage() {
    return (
        <div className="welcome-page">
            <Link to="/react-star-wars/planets/1">
                <Button variant="contained" color="primary">Planets Info</Button>
            </Link>
        </div>
    );
}

export default WelcomePage;
