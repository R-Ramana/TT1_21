import React from 'react';
import Destination from './Destination';
import {Link} from 'react-router-dom';
import './Itinerary.css';

const Itinerary = ({itinerary,onDelete, onEdit}) => {
  const h3Style = {
    textAlign: 'left',
  };
  return (
   
    <div className= 'itinerary'>
      <img className="custom-image" src='/img/Singapore.jpg'/>
    <h1>Title: {itinerary.title} </h1>
    <h2>Budget: ${itinerary.budget}</h2>
     <h3 style={h3Style}> Destinations </h3>
    {itinerary.destinations.map((destination, index) => (
        <Destination key={index} destination={destination} onDelete={onDelete} onEdit={onEdit} />
       ))} 
       <Link className="add-button" to={'/createD'}> Add Destination</Link>
       <button className="edit-button" onClick={onEdit}> Edit Itinerary </button>
      <button className= "delete-button" onClick={onDelete}> Delete Itinerary </button>
    </div>

  )
}

export default Itinerary