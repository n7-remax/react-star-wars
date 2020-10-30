import { Route } from 'react-router-dom'
import Planets from './Planets/Planets';

import '../style/style.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/:page" component={Planets}/>
    </div>
  );
}

export default App;
