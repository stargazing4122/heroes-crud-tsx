import React from 'react';
import Form from './Form';
import TableHeroes from './TableHeroes';

const HeroesScreen = () => {
  return (
    <div>
      <h1>Heroes Screen!</h1>
      <div>
        <Form />
        <TableHeroes />
      </div>
    </div>
  );
};

export default HeroesScreen;
