import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 10px 10px 10px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #fff;

  display: flex;
  justify-content: space-between;
  
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    label {
      color: #fff;    
      font-size: 16px;
      margin-right: 10px;
    }
    span {
      color: #fff;
      font-size: 15px;
    }
  }

  section {
    display: flex;
    
    span {
      width: 100%;
      margin-left: 20px;
    }

    cursor: pointer;
  }
`;