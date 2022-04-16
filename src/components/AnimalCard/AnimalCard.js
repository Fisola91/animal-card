import React from 'react';
import './AnimalCard.css'

//destructuring or unpacking 
export default function AnimalCard(props) {
  const { name } = props;
  return (
    <h2>{name}</h2>
  )
}
