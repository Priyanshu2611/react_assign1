// Person.jsx
import React from 'react';

function Person(props) {
  const { name, age } = props;

  return (
    <p>
      Name: {name} , Age: {age}
    </p>
  );
}

export default Person;
