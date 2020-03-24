import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { IoMdPlanet } from 'react-icons/io';

import Form from '../../components/Form';
import Planet from '../../components/Planet';

import { Container, Planets } from './styles';

export default function Travel() {
  const [planet, setPlanet] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  const [travelPlans, setTravelPlans] = useState([]);

  function handleSaveTravel(description, planet) {
    let lastId;
    let newTravelPlans = [];

    if (id) {
      newTravelPlans = travelPlans.filter(travel => travel.id !== id);
      lastId = id;
    }
    else {
      lastId = travelPlans[travelPlans.length-1]?.id + 1 || 1;
    }

    setTravelPlans([...newTravelPlans, ...travelPlans, { id: lastId, description, planet }]);

    setDescription('');
    setPlanet('');
    toast.success("Adicionado com sucesso!");
  }

  function handleDeleteTravel(description) {
    const deleting = window.confirm("Tem certeza?", "Deletar");

    if (deleting) {
      setTravelPlans(travelPlans.filter(travel => travel.description !== description))
      toast.info("Deletado com sucesso!");
    }
  }

  function handleOpenUpdateTravelMode(id, description, planet) {
    setDescription(description);
    setPlanet(planet);
    setId(id);
  }

  return (
    <Container>
      <Form handleSaveTravel={handleSaveTravel} description={description} planet={planet} />
      <Planets>
        {travelPlans.length > 0 ? travelPlans.map(item => (
          <li key={item.id}>
            <Planet 
              handleDeleteTravel={handleDeleteTravel} 
              handleOpenUpdateTravelMode={handleOpenUpdateTravelMode}
              id={item.id}
              planet={item.planet} 
              description={item.description} />
          </li>
        )) : 
        <span>
          <IoMdPlanet color="white" size={700}/>
        </span>}
      </Planets>
    </Container>
  )
}
