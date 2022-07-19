
import Navbar from './Navbar'
import Acceuil from './Acceuil'
import Activite from './Activite'
import Ajouter from './Create'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Blog from './Blog'
import FAQ from './FAQ'
import Apropos from './Apropos'
import FAQ_E from './FAQ_E'

function App() {
  const title = "Welcome to the new blog"
  return (
    <Router>
    <div className="App">
      <Navbar />

    
      <div className="content">
        <Switch>
        <Route exact path = "/">
            <Acceuil />
          </Route>
          <Route exact path = "/Activite">
              <Activite />
          </Route>
          <Route exact path = "/Create">
            <Ajouter />
          </Route>
          <Route exact path = "/FAQ">
            <FAQ />
          </Route>
          <Route exact path = "/Apropos">
            <Apropos />
          </Route>
          <Route exact path = "/Blog">
            <Blog />
          </Route>
          <Route exact path = "/FAQ_E">
            <FAQ_E />
          </Route>
          
          
        </Switch>
        
  
      </div>
    </div>
    </Router>
  );
}

export default App;
