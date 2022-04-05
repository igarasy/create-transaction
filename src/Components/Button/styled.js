import styled from "styled-components";

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  width: 189px;
  height: 56px;
  left: 1262px;
  border-radius: 8px;
  background: ${(props) => props.background};
  border: none;
  border-color: ${({ borderColor }) => borderColor};
  border-style: ${({ borderStyle }) => borderStyle};
  color: ${({ color }) => color};
  font-style: normal;
  font-weight: 400;
  margin-right: 1rem;
  margin-top: 1rem;
  border: 1px solid #4f46e5;
  box-sizing: border-box;

  font-size: 22px;
`;
