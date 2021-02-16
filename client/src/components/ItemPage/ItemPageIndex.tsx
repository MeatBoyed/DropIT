import React from 'react';

// Import Componets
import { Navbar } from '../Navbar';
import { ItemSection } from './ItemSection';

interface Props {}

export const ItemPageIndex: React.FC<Props> = () => {
  const id = 'txOa0o9IJ7oIzDhV8Nxv';
  return (
    <React.Fragment>
      <Navbar />
      <ItemSection id={id} />
    </React.Fragment>
  );
};
