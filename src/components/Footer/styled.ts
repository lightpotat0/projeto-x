import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 295px;
    color: ${theme.colors.white};
    align-items: center;
    justify-content: space-evenly;
    max-height: fit-content;
  `}

  .footerIcons {
    display: flex;
    width: 15vw;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    .icon {
      display: flex;
      color: #fff;
      font-weight: bold;
      background: none;
      border: none;
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;

      .icon {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 70px;
  left: 0;
  margin-bottom: 35px;
  align-items: center;
  justify-content: space-between;

  .subText {
    width: fit-content;
    height: 0px;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 350;
      text-align: center;
      font-size: 17px;
    }
  }
`;

export const MidContent = styled.div`
  display: flex;
  width: 50vw;
  height: fit-content;
  max-height: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  .knowMore {
    display: flex;
    width: fit-content;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    font-size: 28px;
  }

  .adress {
    font-size: 20px;
    line-height: 27.6px;
    text-align: center;
    width: 70%;
    margin: 3rem 0;
  }

  .axarcaMark {
    display: flex;
    width: fit-content;
    max-width: 100%;
    align-items: center;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    justify-content: space-evenly;

    svg {
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 612px),
    only screen and (max-height: 520px) {
    .knowMore {
      font-size: 20px;
    }
    .adress {
      font-size: 15px;
      margin: 1rem 0;
    }
  }
`;
