import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  min-width: 0;
  background: none;
  width: 80vw;
  height: fit-content;
  color: rgba(27, 27, 27, 1);
  h1 {
    color: rgba(129, 129, 129, 1);
    margin-top: 3rem;
    font-size: 25px;
  }
  h2 {
    font-size: 40px;
    margin-top: 3rem;
    line-height: 48px;
  }
  p {
    font-size: 28px;
    margin-top: 1.5rem;
    line-height: 33.6px;
  }
  .mainText {
    width: 100%;
    height: fit-content;
    margin-top: 5rem;

    .titles {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    @media only screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  .bgFirstWord {
    height: fit-content;
    width: 80vw;
    z-index: -100;
    position: absolute;
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 30px;
      margin-top: 1.5rem;
    }

    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 20px;
    }
    h2 {
      font-size: 35px;
    }
  }

  @media only screen and (max-width: 450px) {
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 15px;
      line-height: 25px;
    }
  }
  @media only screen and (max-width: 305px) {
    h1 {
      font-size: 13px;
    }
    h2 {
      font-size: 23px;
    }
  }
`;
