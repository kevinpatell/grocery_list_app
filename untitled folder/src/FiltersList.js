import React from 'react';

const FiltersList = ({value, id}) => {
  return (
    <li className="filterlist">
      <input type="radio" name="category" value={value} id={id} defaultchecked />
      <label htmlFor={id}>{value}</label>
    </li>
  );
};
export default FiltersList;