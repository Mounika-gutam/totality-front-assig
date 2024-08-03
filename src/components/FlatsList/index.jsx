import React from 'react';
import FlatCard from '../FlatCard';
import "./index.css"

const FlatsList = ({ properties, onBook }) => (
  <ul className="flat-card-list">
    {properties.map(property => (
      <FlatCard key={property.id} property={property} onBook={onBook} />
    ))}
  </ul>
);

export default FlatsList;
