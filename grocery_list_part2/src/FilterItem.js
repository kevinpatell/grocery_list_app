import React, { useRef } from 'react';

const FilterItem = ({ filter, id, onClick }) => {
  const { name, value } = filter;

  const fRef = useRef();

  const handleClick = () => {
    fRef.current.checked = true;
    const selectfilter = fRef.current.value;

    onclick(selectfilter);
  };

  return (
    <li onClick={handleClick}>
      <input type="radio" name="category" value={ value } id={ id } defaultChecked />
      <label htmlFor="filter0">{ name }</label>
    </li>
  );
};

export default FilterItem;
