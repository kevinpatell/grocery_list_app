import React from 'react';

const ShoppingProduct = ({ value, category, product, handleValueChange}) => {
  const updateQty = (newQty) => {
    if (newQty >= 0) {
      handleValueChange(newQty)
    }
  };

  return (
    <li className="shoppingproduct">
      <button type="button" onClick={() => updateQty(value + 1)}>+</button>
      <span><strong>{value}</strong>  {product}</span>
      <button type="button" onClick={() => updateQty(value - 1)}>-</button>
    </li>
  );
};

export default ShoppingProduct;