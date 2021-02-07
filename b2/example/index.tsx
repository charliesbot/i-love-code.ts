import 'react-app-polyfill/ie11';
import 'wired-elements/lib/wired-elements-cjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { StackDoc } from './StackDoc';
import { QueueDoc } from './QueueDoc';
import { LinkedListDoc } from './LinkedListDoc';

const App = () => {
  return <LinkedListDoc />;
};

ReactDOM.render(<App />, document.getElementById('root'));
