import { Route } from 'react-router-dom'
import Planets from './Planets/Planets';
import PlanetDescription from './Planets/PlanetDescription/PlanetDescription';

import '../style/style.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/:page" component={Planets} />
      <Route exact path="/planet/:url" component={PlanetDescription} />
    </div>
  );
}

export default App;
