import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 80px;
  width: 100%;
  max-width: 1600px;
  margin: 0;
`;

export const Header = styled.div`
  font-size: 30px;
`;

export const Planets = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;

  span {
    display: flex;
    justify-content: flex-start;
  }

  li {
    flex: 0 0 45%;
    margin: 0 20px 20px 20px;
  }
`;