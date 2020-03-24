import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import { Container } from './styles';

export default function Planet({ id, planet, description, handleDeleteTravel, handleOpenUpdateTravelMode }) {
  return (
  <Container>
    <div>
      <div>
        <label htmlFor="">Id:</label>
        <span>#{id}</span>
      </div>

      <div>
        <label htmlFor="">Descrição:</label>
        <span>{planet}</span>
      </div>

      <div>
        <label htmlFor="">Planeta:</label>
        <span>{description}</span>
      </div>
    </div>
    <section>
      <span>
        <FaEdit onClick={() => handleOpenUpdateTravelMode(id, description, planet)} size={20} />
      </span>
      <span>
        <FaTrashAlt color="red" onClick={() => handleDeleteTravel(description)} size={20} />
      </span>
    </section>
  </Container>
  );
} 
