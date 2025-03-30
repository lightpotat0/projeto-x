import styled, { css } from 'styled-components';

export const MainContent = styled.div`
  padding-top: 2vh;
  height: fit-content;
  width: 100%;
  color: rgba(27, 27, 27, 1);
  h1 {
    color: rgba(129, 129, 129, 1);
    margin-top: 3rem;
  }
  h2 {
    font-size: 48px;
    margin-top: 3rem;
    line-height: 48px;
  }
  p {
    font-size: 28px;
    margin-top: 1.5rem;
    line-height: 33.6px;
  }

  .main {
    width: 100%;
    height: fit-content;
    min-height: 72vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 1116px) {
      .photo {
        display: none;
      }
    }
  }
  .mainText {
    width: 45vw;
    height: fit-content;
    margin: 5rem 0;

    .img {
      display: none;
    }

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

    @media only screen and (max-width: 550px) {
      h2 {
        font-size: 25px;
        line-height: 30px;
      }
      p {
        font-size: 18px;
      }
    }

    @media only screen and (max-width: 430px) {
      p {
        font-size: 13px;
        line-height: 20px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .photo {
      display: none;
    }
    .main {
      flex-direction: column;
      justify-content: start;
      min-height: 0;
    }
    .mainText {
      width: 95vw;
    }

    .textImage {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      p {
        width: 60%;
      }
      .img {
        display: flex;
        width: 35%;
        height: 100%;
      }
    }
  }
`;

export const MidContent = styled.div`
  height: fit-content;
  margin: 0 0 5rem 0;

  .mainContainer {
    display: flex;
    flex-direction: column;
    padding-top: 10rem;
    align-items: center;
    justify-content: center;
    /* background: rgba(137, 93, 71, 1); */
    min-height: 100vh;
    height: fit-content;
    color: rgba(254, 253, 253, 1);

    @media only screen and (max-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
  .midText {
    width: 75vw;
    display: flex;
    flex-direction: row;
    padding-bottom: 5rem;

    @media only screen and (max-width: 950px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .line {
    width: 85vw;
    border-bottom: 3px solid rgba(255, 255, 255, 0.37);

    @media only screen and (max-width: 768px) {
      height: 85vh;
      border-left: 4px solid rgba(254, 253, 253, 1);
      width: 7vw;
      border-bottom: 0;
    }
  }
  .title {
    width: 32vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20rem;

    @media only screen and (max-width: 1300px) {
      width: 70vw;
      h2 {
        font-size: 30px;
      }
    }

    @media only screen and (max-width: 950px) {
      text-align: center;
      margin-right: 0;
      width: 70vw;
      h2 {
        font-size: 30px;
      }
    }

    @media only screen and (max-width: 530px) {
      h2 {
        font-size: 20px;
      }
    }
  }
  .paragraphs {
    width: 50vw;
    font-size: 23px;
    p {
      margin-top: 5rem;
    }

    @media only screen and (max-width: 1300px) {
      width: 60vw;
      p {
        margin-top: 2rem;
        font-size: 20px;
      }
    }

    @media only screen and (max-width: 530px) {
      p {
        font-size: 15px;
      }
    }

    @media only screen and (max-width: 400px) {
      p {
        line-height: 15px;
      }
    }
  }

  .axarcaData {
    width: 75vw;
    display: flex;
    justify-content: space-evenly;
    margin: 7rem 0;

    .data {
      width: 18vw;

      .number {
        font-size: 48px;
        color: white;
      }

      .dataText {
        font-size: 28px;
        margin-top: 3rem;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      height: fit-content;
      justify-content: space-between;

      .data {
        width: 100%;
        justify-content: center;
        align-items: center;
      }
    }

    @media only screen and (max-width: 530px) {
      .data {
        .number {
          font-size: 40px;
        }
        .dataText {
          font-size: 20px;
        }
      }
    }

    @media only screen and (max-width: 400px) {
      justify-content: center;
      .data {
        .dataText {
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }

  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin-bottom: 40vh;

    .videoContainer {
      width: 80vw;
      height: 80vh;
      align-self: flex-end;
      margin: auto;
    }

    @media only screen and (max-width: 1300px) {
      .videoContainer {
        width: 80vw;
      }
    }

    @media only screen and (max-width: 768px) {
      margin-bottom: 20vh;
      .videoContainer {
        width: 85vw;
        height: 60vh;
      }
    }

    @media only screen and (max-width: 568px) {
      .videoContainer {
        width: 85%;
        height: 100%;
      }
    }
  }
`;

export const SupportUsContainer = styled.div`
  margin: 10rem 0;
  height: fit-content;
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 75vw;
    margin-bottom: 5rem;
  }

  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 35px;
    }

    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 350px) {
    h2 {
      font-size: 28px;
    }
  }
`;

export const SupportUs2Container = styled.div`
  ${({ theme }) => css`
    width: (calc('100%' - '4vw'));
    margin: 0 2vw;
    padding: 2rem;
    height: fit-content;
    max-height: 100vh;
    border-radius: 10px;
    color: black;
    .content {
      height: fit-content;
      max-height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      @media only screen and (max-width: 712px) {
        flex-direction: column;
        max-height: 120vh;
      }
    }

    .video {
      height: 60vh;
      width: 45vw;

      iframe {
        width: 100%;
        height: 100%;
      }

      @media only screen and (max-width: 712px) {
        width: 70%;
        height: 30vh;
        margin: 3rem 0 3rem 0;
      }
    }
    .textContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: fit-content;
      max-height: 110vh;
      width: fit-content;
      max-width: 45vw;
      align-items: center;

      @media only screen and (max-width: 712px) {
        max-width: 90vw;
        max-height: 120vh;
      }

      .textHeader {
        display: flex;
        flex-direction: column;
        height: fit-content;
        max-height: 20vh;
        width: 100%;
        justify-content: start;
        h3 {
          display: flex;
          font-size: 28px;
          line-height: 48px;
          text-align: start;
          max-height: 100%;
        }
      }
      .textBody {
        width: 45vw;
        height: fit-content;
        max-height: 90vh;
        display: flex;
        align-items: start;
        flex-direction: column;

        .mainText {
          width: 100%;
          height: fit-content;
          max-height: 80vh;
          margin: 3rem 0;
          display: flex;
          text-align: start;
          align-items: center;
          justify-content: center;
          p {
            width: 100%;
            font-size: 2rem;

            @media only screen and (max-width: 1350px),
              only screen and (max-height: 661px) {
              font-size: 20px;
              line-height: 33px;
            }
            @media only screen and (max-width: 712px),
              only screen and (max-height: 481px) {
              line-height: 28px;
            }
          }
        }
        .buttonContainer {
          display: flex;
          height: fit-content;
          max-height: 10vh;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary};
            padding: 30px 80px 30px 80px;
            border: none;
            border-radius: 9px;
            font-size: 23px;

            @media only screen and (max-width: 1100px) {
              font-size: 18px;
              padding: 20px 60px 20px 60px;
            }
          }
        }

        @media only screen and (max-width: 378px) {
          .mainText p {
            font-size: 20px;
            line-height: 23px;
          }

          .buttonContainer button {
            font-size: 15px;
            padding: 15px 40px;
          }
        }

        @media only screen and (max-width: 712px) {
          width: 90vw;
          .textHeader {
            width: 90vw;
          }
          p {
            font-size: 25px;
            margin: 1rem 0 1rem 0;
            line-height: 28px;
          }
          button {
            font-size: 18px;
            padding: 20px 30px 20px 30px;
          }
        }
      }
    }
  `}
`;
