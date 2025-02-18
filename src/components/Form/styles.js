import styled from "styled-components";

export const SelectStyle = styled.select`
  border: 1px solid #7159c1;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

export const Container = styled.div.attrs(props => (
  props.travelPlans
))`
  display: flex;
  justify-content: flex-start;
  width: ${props => props.travelPlans.length < 1 ? 100 + '%' : 50 + '%'};
  height: 20%;
`;

export const FormStyle = styled.form.attrs(props => (
  props.travelPlans
))`
  width: ${props => props.travelPlans.length < 1 ? 80 + '%' : 95 + '%'};
  margin-left: ${props => props.travelPlans.length < 1 ? 0 : 50 + 'px'};
  height: 20%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #fff;
  
  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }

  .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }

  p {
    color: #fff;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    border: 1px solid #7159c1;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }

  button[type="submit"],
  input[type="submit"] {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
    cursor: pointer;
  }

  button[type="submit"]:hover,
  input[type="submit"]:hover {
    background: #bf1650;
  }

  button[type="submit"]:active,
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type="button"]:hover {
    transition: 0.3s all;
  }

  button[type="submit"],
  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }

`;

