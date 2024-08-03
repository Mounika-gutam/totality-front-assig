import React from 'react';
import "./index.css"

const FlatCard = ({ property, onBook }) => (
  <li className="flat-card">
    <img src={property.image} alt={property.title} className='flat-img' />
    <h3 className='flat-title'>{property.title}</h3>
    <p className='flat-description'>{property.description}</p>
    <p className='flat-price'><span>Price:</span> ${property.price}</p>
    <div className='flat-button-container'>
    <button className='flat-book-button'>Book Now</button>
    <button className='flat-book-button' onClick={() => onBook(property)}>Add To Cart</button>
    </div>
  </li>
);

export default FlatCard;
