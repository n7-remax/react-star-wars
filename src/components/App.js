import { Route } from 'react-router-dom'
import Planets from './Planets/Planets';
import PlanetDescription from './Planets/PlanetDescription/PlanetDescription';

import '../style/style.css';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/:page" component={Planets} />
      <Route exact path="/planet/:url" component={PlanetDescription} />
    </div>
  );
}

export default App;