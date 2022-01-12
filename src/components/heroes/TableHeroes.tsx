import React from 'react';

const TableHeroes = () => {
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>N°</th>
            <th>ID</th>
            <th>Hero</th>
            <th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>23442</td>
            <td>Wolverine</td>
            <td>Marvel</td>
            <td>
              <button type="button" className="btn btn-outline-info me-3">
                Ver+
              </button>
              <button type="button" className="btn btn-outline-warning me-3">
                Edit
              </button>
              <button type="button" className="btn btn-outline-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>345345</td>
            <td>Wonder Woman</td>
            <td>DC</td>
            <td>
              <button type="button" className="btn btn-outline-info me-3">
                Ver+
              </button>
              <button type="button" className="btn btn-outline-warning me-3">
                Edit
              </button>
              <button type="button" className="btn btn-outline-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableHeroes;
