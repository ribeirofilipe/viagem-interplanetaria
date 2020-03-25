import React, { useState, useEffect }from "react";
import { useForm } from "react-hook-form";

import api from '../../services/api';

import { Container, FormStyle, SelectStyle } from './styles';

export default function Form({ 
  travelPlans, 
  handleSaveTravel, 
  description: descriptionUpdate, 
  planet: planetUpdate,
  index,
  handleUpdateTravel,
  isEditing }) {
  const [planet, setPlanet] = useState('');
  const [description, setDescription] = useState('');
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function loadPlanets() {
      const response = await api.get('planets/?format=json');
      const planetsName = response.data.results.map(planet => planet.name);

      setPlanets(planetsName);
    }

    loadPlanets();
  }, [])

  function cleanForm() {
    setValue("reactSelect", '');
    setPlanet(null);
    setDescription(null);
  }

  const { register, handleSubmit, errors, setValue } = useForm();


  const onSubmit = () => {
    cleanForm();

    if (isEditing) return handleUpdateTravel(index, description, planet);

    handleSaveTravel(description, planet);
  }; 

  return (
    <Container travelPlans={travelPlans}>
      <FormStyle travelPlans={travelPlans} onSubmit={handleSubmit(onSubmit)}>
        <label>Descrição</label>
        <input 
          name="Descricao" 
          onChange={e => setDescription(e.target.value)} 
          value={description || descriptionUpdate} 
          ref={register({ required: true })} />
        {errors.Descricao && <p>This field is required</p>}
        <label>Planeta</label>
        <SelectStyle
              name="Planeta"
              placeholder="Selecione o planeta"
              value={planet || planetUpdate}
              onChange={e => setPlanet(e.target.value)}
              ref={register({ required: true })} 
            >
               <option value="">Selecione o planeta</option>
              {planets?.map(planet => (
                <option key={planet}>{planet}</option>
            ))}
            </SelectStyle>
        {errors.Planeta && <p>This field is required</p>}
        <input type="submit" />
      </FormStyle>
    </Container>
  );
} 
