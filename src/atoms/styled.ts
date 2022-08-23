import styled from "@emotion/styled";

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ClearButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const ClearA = styled.a`
  &, &:hover, &:focus, &:active {
    text-decoration: none;
    color: inherit;
  }
`;