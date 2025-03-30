import styled, { css } from 'styled-components';

export const CarouselSlider = styled.div`
  overflow: hidden;

  .productsCarousel {
    display: flex;
    width: 100%;
    height: fit-content;
  }

  .ourMastersCarousel {
    display: flex;
    width: 95vw;
    align-items: center;
  }

  .ourMastersMobileCarousel {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .xiloHistoryCarousel {
    display: flex;
    width: 80vw;
    align-items: center;
    flex-direction: row;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      backface-visibility: hidden;
      touch-action: pan-x pinch-zoom;
    }
  }
  ${({ theme }) => css`
    .xiloHistory__dots {
      display: flex;
      height: fit-content;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 3rem;
      margin-right: calc((2.6rem - 1.4rem) / 2 * -1);

      @media only screen and (max-width: 768px) {
        height: 50vh;
        width: 5rem;
        margin-top: 3rem;
        margin-bottom: 0;
        flex-direction: column;
        justify-content: space-between;
      }

      @media only screen and (max-width: 410px) {
        width: 3.5rem;
      }
    }
    .xiloHistory__dot {
      /* -webkit-tap-highlight-color: rgba(black, 0.5); */
      -webkit-appearance: none;
      appearance: none;
      background-color: rgba(217, 217, 217, 1);
      touch-action: manipulation;
      display: inline-flex;
      text-decoration: none;
      cursor: pointer;
      border: 0;
      padding: 0;
      margin: 0;
      width: 2.6rem;
      height: 2.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      @media only screen and (max-width: 410px) {
        width: 2rem;
        height: 2rem;
      }
    }
    .xiloHistory__dot:after {
      box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      content: '';
    }
    .xiloHistory__dot--selected:after {
      background: ${theme.colors.secondary};
    }
    .backOrange {
      background-color: ${theme.colors.secondary};
    }

    .line {
      background: rgba(187, 187, 187, 1);
      width: 80%;
      height: 4px;
      position: absolute;
      z-index: -1;

      @media only screen and (max-width: 768px) {
        height: 50vh;
        width: 4px;
      }

      @media only screen and (max-width: 350px) {
        width: 2px;
      }
    }
    .lineSubtitle {
      width: 80%;
      height: 4px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      padding-bottom: 10rem;
      color: rgba(129, 129, 129, 1);
    }
    .products__dots {
      display: flex;
      height: fit-content;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 3rem;
      margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
    }
    .products__dot {
      /* -webkit-tap-highlight-color: rgba(black, 0.5); */
      -webkit-appearance: none;
      appearance: none;
      background-color: rgba(217, 217, 217, 1);
      touch-action: manipulation;
      display: inline-flex;
      text-decoration: none;
      cursor: pointer;
      border: 0;
      padding: 0;
      margin: 0;
      width: 2.6rem;
      height: 2.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 2rem;

      @media only screen and (max-width: 510px) {
        width: 1rem;
        height: 1rem;
      }
    }
    .products__dot:after {
      box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      content: '';
    }
    .products__dot--selected:after {
      background: ${theme.colors.primary};
    }
  `}
`;

export const Buttons = styled.div`
  position: absolute;
  display: flex;
  height: 56.9vh;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 90vw;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const CarouselButton = styled.button`
  border: none;
  background: rgba(0, 0, 0, 0.25);
  color: rgba(137, 93, 71, 1);
  border-radius: 50%;
  box-shadow: 3px 10px 13px 0px rgba(0, 0, 0, 0.25);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: fit-content;
  position: absolute;
  margin-top: 28.45vh;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
