import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

import { Container } from './styles';

export default function Planet({ index, planet, description, handleDeleteTravel, handleOpenUpdateTravelMode }) {
  return (
  <Container>
    <div>
      <div>
        <label htmlFor="">Descrição:</label>
        <span>{description}</span>
      </div>
      <div>
        <label htmlFor="">Planeta:</label>
        <span>{planet}</span>
      </div>
    </div>
    <section>
      <span>
        <FaEdit color="white" onClick={() => handleOpenUpdateTravelMode(index, description, planet)} size={20} />
      </span>
      <span>
        <FaTrashAlt color="white" onClick={() => handleDeleteTravel(description)} size={20} />
      </span>
    </section>
  </Container>
  );
} 
