import styled from "styled-components";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export const Container = styled.div`
  display: flex;
  width: 30%;
  height: 20%;
  
  form {
    background: #fff;
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

export const FormControlPlanet = styled(FormControl)`
  width: 95% !important;
`;

export const SelectPlanet = styled(Select)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
