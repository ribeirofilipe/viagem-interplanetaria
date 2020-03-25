import React, { useState, useEffect } from 'react'
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
  const [travelPlans, setTravelPlans] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const plans = JSON.parse(localStorage.getItem('travelPlans'));

    if (plans) {
      setTravelPlans([...plans]);
    }
  }, [])


  function handleSaveTravel(description, planet) {
    if (duplicatedValidation(description)) return;
    
    localStorage.setItem('travelPlans', 
      JSON.stringify([...travelPlans, { description, planet }]));

    setTravelPlans([...travelPlans, { description, planet }]);
    setDescription('');
    setPlanet('');
    
    toast.success("Adicionado com sucesso!");
  }

  function handleUpdateTravel(index, description, planet) {
    if (duplicatedValidation(description)) return;
    
    travelPlans.splice(index, 1, { description, planet });

    localStorage.setItem('travelPlans', 
        JSON.stringify([...travelPlans]));

    setTravelPlans([...travelPlans])
    setIsEditing(false);
    setIndex(0);
    setDescription('');
    setPlanet('');

    toast.success("Atualizado com sucesso!");
  }

  function handleDeleteTravel(description) {
    const deleting = window.confirm("Tem certeza?", "Deletar");

    if (deleting) {
      localStorage.setItem('travelPlans', 
        JSON.stringify(travelPlans.filter(travel => travel.description !== description)));
      setTravelPlans(travelPlans.filter(travel => travel.description !== description))
      toast.info("Deletado com sucesso!");
    }
  }

  function handleOpenUpdateTravelMode(index, description, planet) {
    setPlanet(planet);
    setDescription(description);
    setIsEditing(true);
    setIndex(index);
  }

  function duplicatedValidation (description) {
      if (travelPlans.find(travel => travel.description === description) && !isEditing) {
      return toast.error("Viagem já existente!")
    }
  }
  return (
    <>
      <Header />
      <Welcome />
      <Container travelPlans={travelPlans}>
        <span>
          <GiSolarSystem  color="white" size={700}/>
        </span> 
        <Form 
          travelPlans={travelPlans}
          handleSaveTravel={handleSaveTravel} 
          handleUpdateTravel={handleUpdateTravel}
          description={description} 
          index={index}
          isEditing={isEditing}
          planet={planet}/>
        <Planets>
          {travelPlans.map(item => (
            <li key={item.description}>
              <Planet 
                index={travelPlans.findIndex(travel => travel.description === item.description)}
                handleDeleteTravel={handleDeleteTravel} 
                handleOpenUpdateTravelMode={handleOpenUpdateTravelMode}
                planet={item.planet} 
                description={item.description} />
            </li>
          ))}
        </Planets>
    </Container>
    </>
  )
}
