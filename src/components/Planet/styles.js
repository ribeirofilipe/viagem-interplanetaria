import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  margin: 0 20px 20px 20px;
  padding: 20px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    label {
      color: #7159c1;
      margin: 0 10px;
      font-size: 22px;
    }
    span {
      font-size: 20px;
    }
  }

  section {
    span {
      margin-left: 20px;
    }

    cursor: pointer;
  }
`;