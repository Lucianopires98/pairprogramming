import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f2f4f1;
  padding: 3rem 0;
`;

export const Title = styled.p`
  font-size: 40px;
  margin: 10rem 0 5rem 0;
  text-transform: uppercase;

  &::after {
    content: "";
    width: 80px;
    height: 3px;
    background-color: #000;
    margin: 2rem 7rem;

    display: block;

    position: relative;
  }
`;

export const BoxCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  box-shadow: 0px 7px 6px #00000029;
`;

export const Image = styled.img`
  width: 300px;
`;

export const Paragraph = styled.p`
  padding-bottom: 5rem;
  font-size: 20px;

  &::before {
    content: "";
    width: 50px;
    height: 3px;
    background-color: #000;
    margin-left: 2rem;

    display: block;

    position: relative;
    bottom: 2rem;
  }
`;
