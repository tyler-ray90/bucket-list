import './App.css';
import { Route, Switch } from 'react-router-dom';

//Imported components 
import Nav from './Components/Nav/Nav';

//Imorted Pages
import HomePage from './Pages/HomePage/HomePage';
import BucketList from './Pages/BucketList/BucketList';

function App() {
  return (
    <div className="App">
    <Nav />
    <Switch>
    <Route exact path = '/' render={(props) =>
    <HomePage />
  }/>
    <Route exact path = '/list' render={(props)  => 
    <BucketList />
  }/>

    </Switch>
    </div>
  );
}

export default App;
