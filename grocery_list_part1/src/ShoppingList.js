import React, { useState } from 'react';
import ShoppingProduct from './ShoppingProduct';

const ShoppingList = () => {

  let [meat, setMeat] = useState(0);
  let [prod, setProd] = useState(0);
  let [dairy, setDairy] = useState(0);
  let [bakery, setBakery] = useState(0);

  return (
  	<ul id="shoppingList" className="shoppinglist">
      <ShoppingProduct value={meat} category="meat" product="Steak" handleValueChange={setMeat}/>
      <ShoppingProduct value={prod} category="prod" product="Apples" handleValueChange={setProd}/>
      <ShoppingProduct value={dairy} category="dairy" product="Milk" handleValueChange={setDairy}/>
      <ShoppingProduct value={bakery} category="bakery" product="Baguettes" handleValueChange={setBakery}/>
    </ul>
	)
}


export default ShoppingList;