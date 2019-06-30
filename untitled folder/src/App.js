import React from 'react';
import Form from './Form';
import Filters from './Filters';
import ShoppingList from './ShoppingList';


const App = () => {
  return (
    <React.Fragment>
      <header class="header">
        <h1>Grocery List</h1>
      </header>
      <Form />
      <Filters />
      <ShoppingList />
    </React.Fragment>
  );
};

export default App;
