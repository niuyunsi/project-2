import * as React from 'react';

const style = {
  flex: '4',
  border: '1px solid black',
  margin: '5px'
};

export const Main = props => {
  return <div style={style}>{props.children}</div>;
};
