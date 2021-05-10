import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


//Imported components 
import Nav from './Components/Nav/Nav';

//Imorted Pages
import HomePage from './Pages/HomePage/HomePage';
import BucketList from './Pages/BucketList/BucketList';





function App() {

const [ state, setState ] = useState({ lists: []});

  useEffect(() => {
    async function getLists() {
      const lists = await fetch('http://localhost:3000/bucketlists').then(res => res.json());
      setState({ lists });
    }
    getLists();
  }, []);

  async function handleAdd(formInputs) {
    try {
      const list = await fetch('http://localhost:3000/bucketlists', {
        method: 'POST',
        headers: {
          'Content-type' : 'Application/JSON'
        },
        body: JSON.stringify(formInputs)
      }).then(res => res.json());

      setState(prevState => ({ lists: [list, ...prevState.lists]}));
    } catch (error) {
      
    }
  }

  async function handleDelete(listId) {
    try {
      await fetch(`http://localhost:3000/lists/${listId}`, {
        method: 'DELETE'
      })
      const updatedLists = state.lists.filter(list => list.id !== listId);
      setState({ lists: updatedLists });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(formInputs) {
    try {
      await fetch(`http://localhost:3000/lists/${formInputs.id}`, {
        method: 'PUT',
        headers: {
        'Content-type': 'Application/json'
        },
        body: JSON.stringify(formInputs)
      });

      const listIdx = state.lists.findIndex(list => 
        list.id === formInputs.id);
        const updatedListsArray = state.lists;
        updatedListsArray.splice(listIdx, 1, formInputs);

        setState({ lists: updatedListsArray });

    } catch (error) {

    }
  }

  return (
    <div className="App">
    <Nav />
    <Switch>
    <Route exact path = '/' render={(props) =>
    <HomePage />
  }/>
    <Route exact path = '/list' render={(props)  => 
    <BucketList 
    lists={state.lists}
    handleAdd={handleAdd}
    handleDelete={handleDelete}
    handleUpdate={handleUpdate}
    
    />
  }/>

    </Switch>
    </div>
  );
}

export default App;
