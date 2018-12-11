import * as React from 'react';

const style = {
  flex: 1,
  border: '1px solid black',
  margin: '5px'
};

export const Nav = () => {
  return (
    <div style={style}>
      <ul>
        <li>
          <a href="">Chat</a>
        </li>
        <li>
          <a href="">App</a>
        </li>
      </ul>
    </div>
  );
};
