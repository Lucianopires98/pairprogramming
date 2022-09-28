import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 3rem;
`;

export const BoxBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
`;

export const BtnHeader = styled.button`
  background: none;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  padding: 1rem;
  width: 12rem;

  &:hover {
    border: 2px solid #000;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  font-size: 3rem;
  text-transform: uppercase;
`;
