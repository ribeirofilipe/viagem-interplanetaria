import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { GiSolarSystem } from 'react-icons/gi';

import Form from '../../components/Form';
import Planet from '../../components/Planet';
import Welcome from '../../components/Welcome';
import Header from '../../components/Header';

import { Container, Planets } from './styles';

export default function Travel() {
  const [planet, setPlanet] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  const [travelPlans, setTravelPlans] = useState([]);

  function handleSaveTravel(description, planet) {
    setTravelPlans([...travelPlans, { description, planet }]);

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
    <>
      <Header />
      <Welcome />
      <Container>
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
            <GiSolarSystem color="white" size={700}/>
          </span>}
        </Planets>
        <Form handleSaveTravel={handleSaveTravel} description={description} planet={planet} />
    </Container>
    </>
  )
}
