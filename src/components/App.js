import { Route } from "react-router-dom";
import Planets from "./Planets/Planets";
import FamousResidents from "./Planets/FamousResidents/FamousResidents";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import Soon from "./Soon/Soon";

import "../style/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/react-star-wars/soon" component={Soon}/>
      <Route exact path="/react-star-wars" component={HomePage}/>
      <Route exact path="/react-star-wars/planets/:page" component={Planets} />
      <Route
        exact
        path="/react-star-wars/planet/:url"
        component={FamousResidents}
      />
    </div>
  );
}

export default App;
