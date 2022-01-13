import React from 'react';
import { Hero } from '../../interfaces/interfaces';
import { EditMode } from './TableHeroes';

interface TableItemProps {
  index: number;
  hero: Hero;
  deleteHero: (id: string) => void;
  setEditMode: (editMode: EditMode) => void;
}

const TableItem = ({
  index,
  hero,
  deleteHero,
  setEditMode,
}: TableItemProps) => {
  const handleEditMode = (hero: Hero) => {
    setEditMode({
      state: true,
      superhero: hero,
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{hero.id}</td>
      <td>{hero.hero}</td>
      <td>{hero.publisher}</td>
      <td>
        <button type="button" className="btn btn-outline-info me-3">
          Ver+
        </button>
        <button
          onClick={() => handleEditMode(hero)}
          type="button"
          className="btn btn-outline-warning me-3"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteHero(hero.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
