import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 22%;
  min-width: 0;
  width: fit-content;
  max-height: fit-content;
  margin-right: 3rem;
  border-radius: 9px;

  @media only screen and (max-width: 1400px) {
    flex: 0 0 30%;
  }
  @media only screen and (max-width: 1010px) {
    flex: 0 0 40%;
  }

  @media only screen and (max-width: 567px) {
    flex: 0 0 48%;
  }
  @media only screen and (max-width: 441px) {
    flex: 0 0 100%;
  }

  background: #895d47; //linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(67, 25, 4, 1) 50%);

  .photoImage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
  .text {
    height: fit-content;
    width: fit-content;
    max-height: 300px;
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    border: none;
    z-index: 1;

    .masterName {
      font-size: xx-large;
      color: rgba(255, 255, 255, 1);
    }
    .masterSubtitle {
      font-size: small;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 1);
      width: 90%;
    }
    .masterText {
      font-size: 16px;
      text-align: start;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      a {
        margin: 3rem 0;
        color: rgba(255, 255, 255, 1);
        width: fit-content;
      }
    }

    @media only screen and (max-width: 1243px) {
      .masterSubtitle {
        margin: 0.5rem;
      }
      .masterName {
        font-size: 25px;
      }
      .masterText {
        font-size: 13px;
      }
    }
  }
`;

export const CarouselContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  width: 100%;
  height: fit-content;
`;

export const ContentMobile = styled.div`
  background: none;
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  align-items: start;
  justify-content: space-evenly;

  .photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .middle {
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 440px) {
    .photo {
      width: 120px;
      height: 120px;
    }
  }
  @media only screen and (max-width: 340px) {
    column-gap: 5px;
    .photo {
      width: 80px;
      height: 80px;
    }
  }
  @media only screen and (max-width: 340px) {
    column-gap: 5px;
    .photo {
      width: 90px;
      height: 90px;
    }
  }
`;
