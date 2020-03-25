import styled from "styled-components";

export const Container = styled.div.attrs(props => (
  props.travelPlans
))`
  display: flex;
  justify-content: flex-start;
  margin: 80px;
  width: 100%;
  margin: 0;
  
  span {
    display: ${props => props.travelPlans.length < 1 ? '' : 'none'};
  }
`;

export const Header = styled.div`
  font-size: 30px;
`;

export const Planets = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  span {
    display: flex;
    justify-content: flex-start;
  }

  li {
    flex: 0 0 40%;
    margin: 0 10px 10px 10px;
  }
`;