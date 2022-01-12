import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <label className="form-label">Input a superhero</label>
        <input
          type="text"
          className="form-control mb-3"
          autoComplete="off"
          name="superhero  "
        />
        <label className="form-label">Input its publisher</label>
        <input
          type="text"
          className="form-control mb-3"
          autoComplete="off"
          name=" publisher "
        />
        <button type="submit" className="btn btn-outline-success mb-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
