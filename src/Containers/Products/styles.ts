import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  height: fit-content;
  width: 100%;
  background-color: #fff;
`;

export const GridContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(400px, 1fr)
  ); /* Max 5 columns */
  gap: 16px;
  padding: 16px;
`;

export const GridItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
