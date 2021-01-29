import 'react-app-polyfill/ie11';
import 'wired-elements/lib/wired-elements-cjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { StackDoc } from './StackDoc';

const App = () => {
  return <StackDoc />;
};

ReactDOM.render(<App />, document.getElementById('root'));
