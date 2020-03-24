import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import api from '../../services/api';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import { Container, FormControlPlanet, SelectPlanet } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Form({ handleSaveTravel, description: updateDescription, planet: updatePlanet, id}) {
  const classes = useStyles();

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
    setPlanet('');
    setDescription('');
  }

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControlPlanet variant="outlined">
          <TextField
            required  
            id="outlined-required"
            label="Description"
            variant="outlined"
            onChange={e => setDescription(e.target.value)}
            value={description || updateDescription}
          />
          <SelectPlanet
            native
            value={planet || updatePlanet}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
            onChange={e => setPlanet(e.target.value)}
          >
          <option value="">
            Select a planet
          </option>
          {planets.map(planet => (
            <option key={planet}>{planet}</option>
          ))}
          </SelectPlanet>
          <Button 
            onClick={() => {
              cleanForm();
              handleSaveTravel(description || updateDescription, planet || updatePlanet);
            }}
            className="form-button"
            variant="contained" 
            color="primary">
            Salvar  
          </Button>
        </FormControlPlanet>
      </form>
    </Container>
  );
} 
