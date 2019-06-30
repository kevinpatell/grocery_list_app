import React, { useRef } from 'react';

const Form = ({onSubmit}) => {

  const iRef = useRef();

  const handleSubmit = (event) => {
    if (iRef.current.value !== '') {
      event.preventDefault();
      
      const s = {
        name: iRef.current.value,
        type: 'all',
        quantity: 1,
      };
      onSubmit(s);
    };
    iRef.current.value = '';
  };
  
  return (
   <form id="newItem" className="newitem" auto-complete="off" onSubmit={handleSubmit}>
     <label htmlFor="itemName" className="line-label">New Item</label>
     <div className="addnew">
        <input ref={iRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
        <input type="submit" value="Add" className="form-component btn" />
     </div>
   </form>
  );
};

export default Form;
