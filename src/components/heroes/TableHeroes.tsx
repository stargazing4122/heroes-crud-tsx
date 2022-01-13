import React, { useContext, useEffect, useState } from 'react';
import TableItem from './TableItem';
import { UserContext } from '../../context/UserContext';
import FormEditMode from './FormEditMode';
import { Hero } from '../../interfaces/interfaces';

export interface EditMode {
  state: boolean;
  superhero: Hero;
}

const TableHeroes = () => {
  const { heroesList, deleteHero } = useContext(UserContext);
  useEffect(() => {}, [heroesList]);
  // getHeroes(); ciclo infinito

  const [editMode, setEditMode] = useState<EditMode>({
    state: false,
    superhero: {
      id: '',
      hero: '',
      publisher: '',
    },
  });

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
        {heroesList.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={3}>Sin data</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {heroesList.map((hero, index) => (
              <TableItem
                key={hero.id}
                index={index}
                hero={hero}
                deleteHero={deleteHero}
                setEditMode={setEditMode}
              />
            ))}
          </tbody>
        )}
      </table>
      {editMode.state && (
        <FormEditMode editMode={editMode} setEditMode={setEditMode} />
      )}
    </div>
  );
};

export default TableHeroes;
