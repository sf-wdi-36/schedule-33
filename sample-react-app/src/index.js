import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './index.css';

ReactDOM.render(
  <div>
  <Hello name={"Jean"} favColor={"orange"} />
  <Hello name={"Carljkasfdjklsdfajlk"} favColor={"orange"} />
  </div>,
  document.getElementById('root')
);
