
import { Route, Switch } from 'react-router';
import { Footer } from './Components/Footer';

import { AddContat } from './Pages/AddContat';
import { Errors } from './Pages/Errors';
import { Home } from './Pages/Home';
import { NavBar } from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <NavBar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/add" component={AddContat}/>
       <Route path="/error" component={Errors}/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
