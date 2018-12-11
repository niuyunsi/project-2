import * as React from 'react';

import { Main } from './Main';
import { Nav } from './Nav';

const style = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  display: 'flex',
  border: '1px solid black'
};

export const App = () => {
  return (
    <div style={style}>
      <Nav />
      <Main>
        <div>Main Window</div>
      </Main>
    </div>
  );
};
