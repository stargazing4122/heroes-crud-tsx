import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Input a hero"
          autoComplete="off"
        />
        <button type="submit" className="btn btn-outline-success mb-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
