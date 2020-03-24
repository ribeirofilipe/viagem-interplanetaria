import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 80px;
`;

export const Planets = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  span {
    margin: auto;
  }

  li {
    flex: 0 0 45%;
    margin: 0 20px 20px 20px;
  }
`;