import React, { useEffect, useState } from 'react';
import { helpHttp, Options } from '../../helpers/helptHttp';
import { Hero } from '../../interfaces/interfaces';
import TableItem from './TableItem';

const TableHeroes = () => {
  const url = 'http://localhost:5555/heroes';

  const [heroesList, setHeroesList] = useState<Hero[]>([]);

  //METHOD GET
  const getHeroes = async () => {
    const options: Options = {
      headers: {},
    };
    try {
      const json = await helpHttp().get(url, options);
      setHeroesList(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  //METHOD DELETE
  const deleteHero = async (id: string) => {
    const options: Options = {
      headers: {},
    };
    try {
      await helpHttp().del(url, id, options);
      getHeroes();
      getHeroes();
    } catch (err) {
      console.log(err);
    }
  };

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
          {heroesList.map((hero, index) => (
            <TableItem
              key={hero.id}
              index={index}
              hero={hero}
              deleteHero={deleteHero}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableHeroes;
