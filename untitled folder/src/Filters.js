import React from 'react';
import FiltersList from './FiltersList';

const Filters = () => {
  return (
    <section id="filterCategories">
      <ul className="filters">
        <FiltersList value="all" id="filter0"/>
        <FiltersList value="meat" id="filter1" />
        <FiltersList value="prod" id="filter2" />
        <FiltersList value="dairy" id="filter3" />
        <FiltersList value="bakery" id="filter4" />
      </ul>
      <form id="newCat" className="cat-new">
        <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
      </form>
    </section>  
  );
};

export default Filters;