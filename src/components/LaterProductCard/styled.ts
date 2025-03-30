import styled from 'styled-components';
import { css } from 'styled-components';

export const CardTitle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  font-size: 1.7vw;
  line-height: 2.5vw;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 3.5vw;
    line-height: 4.2vw;
    ${({ theme }) => css`
      color: ${theme.colors.darkPrimary};
    `}
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 90%;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Price = styled.div`
  font-size: 1.7vw;
  line-height: 2.5vw;

  @media only screen and (max-width: 768px) {
    font-size: 4vw;
    margin-right: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 6.2vh;

  margin-top: 2rem;
`;

export const ButtonCard = styled.button`
  padding: 1.7vh 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 9px;
  font-size: 1vw;
  border: none;
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `}
  height: 100%;
  margin-right: 2rem;
  height: fit-content;
`;

export const ShoppingCartButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  padding: 0 1vw;
  height: fit-content;
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    height: 100%;

    @media only screen and (max-width: 768px) {
      background: ${theme.colors.secondary};
      padding: 1vh 4vw;
    }
  `}
`;
