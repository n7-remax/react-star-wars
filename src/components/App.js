import { Route } from 'react-router-dom'
import Planets from './Planets/Planets';
import PlanetDescription from './Planets/PlanetDescription/PlanetDescription';
import Header from './Header/Header';

import '../style/style.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/react-star-wars/planets/:page" component={Planets} />
      <Route exact path="/react-star-wars/planet/:url" component={PlanetDescription} />
    </div>
  );
}

export default App;
