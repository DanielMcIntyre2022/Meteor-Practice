import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

const tasks = [
  {
    id: 1,
    text: 'First Task',
  },
  {
    id: 2,
    text: 'Second Task',
  },
  {
    id: 3,
    text: 'Third Task',
  }
]

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
  </div>
);
