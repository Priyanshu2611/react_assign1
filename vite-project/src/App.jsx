// App.jsx
import React from 'react';
import Header from './Header';
import Person from './Person';
import Button from './Button';
import List from './List';

function App() {
  return (
    <>
      <Person name="Priyanshu Dey" age="20" />
      <Button text="Click me!" onClick={() => console.log('Button clicked')} />
      <Header title="Priyanshu" />
      <List items={['Cricket', 'Football', 'Chess']} />
    </>
  );
}

export default App;
