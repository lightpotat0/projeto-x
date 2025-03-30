import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 2vh;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    width: 90vw;
    h1 {
      color: rgba(129, 129, 129, 1);
      margin-top: 3rem;
    }
  }
`;

export const ContentSection = styled.div`
  width: 90vw;
  height: fit-content;
  display: flex;
  padding-bottom: 7rem;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const MainText = styled.div`
  width: 50%;
  height: fit-content;
  margin: 5rem 0;

  .buttons {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    margin-top: 3rem;

    .button2 {
      margin-left: 2rem;
    }
  }

  h2 {
    font-size: 33px;
    line-height: 48px;
    color: rgba(109, 46, 15, 1);
  }
  p {
    font-size: 20px;
    margin-top: 1.5rem;
    line-height: 24px;
  }

  @media only screen and (max-width: 1371px) {
    h1 {
      margin-top: 2rem;
    }
    h2 {
      font-size: 30px;
      line-height: 40px;
    }

    p {
      font-size: 23px;
      line-height: 28px;
    }
  }

  @media only screen and (max-width: 1116px) {
    width: 70vw;
  }

  @media only screen and (min-width: 1600px) {
    p {
      font-size: 25px;
      line-height: 26px;
    }
  }
`;

export const MidContent = styled.section`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgDiv = styled.div`
  width: 45vw;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
