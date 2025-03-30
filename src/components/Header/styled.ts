import styled, { css } from 'styled-components';
import background from '@/config/img/headerBg.svg';
import menuBackground from '@/config/img/floatMenu.svg';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.darkPrimary};
    color: ${theme.colors.white};
    padding: 20px;
    max-height: 24vh;
    min-height: 150px;
    width: 100%;
    display: flex;
    box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.25);
    align-items: center;
    justify-content: center;
    //    position: absolute;
    z-index: 1;

    @media only screen and (max-width: 768px) {
      box-shadow: 0px 0px 0px 0px;
    }
    .avatar {
      border-radius: 50px;
      height: auto;
      width: 80px;
    }
    .wpp:hover {
      color: ${theme.colors.secondary};
    }
  `}

  .menuButton {
    display: flex;
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    background: url(${menuBackground.src});
    color: #fff;
    float: right;
    margin-left: 1rem;
    border: none;
    cursor: pointer;
    background-size: 'cover';
    background-position: 'center';
    background-repeat: 'no-repeat';
  }

  .categoriesButton {
    display: none;

    @media only screen and (max-width: 768px) {
      display: flex;
      z-index: 999999999999999;
    }
  }

  a {
    display: flex;
    color: #fff;
    font-weight: bold;
    align-items: center;
    justify-content: space-between;

    small {
      display: flex;
      width: 75%;
    }
  }

  @media only screen and (max-width: 768px) {
    background: none;
    background-image: url(${background.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column;
  }
`;

export const BottomBar = styled.div`
  ${({ theme }) => css`
    //background: ${theme.colors.white};
    color: ${theme.colors.white};
    display: flex;
    height: 46px;
    //width: 100%;
    //position: absolute;
    bottom: 0;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    flex-wrap: nowrap;

    ul {
      display: flex;
      width: fit-content;
      max-width: 90vw;
      justify-content: space-evenly;
      align-items: center;
      list-style-type: none;

      .bottomBarButton {
        color: ${theme.colors.white};
        background: none;
        border: none;
        width: fit-content;
        align-items: center;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
      }

      .bottomBarButton:hover {
        color: ${theme.colors.secondary};
      }

      li {
        margin-right: 5rem;
      }

      @media only screen and (max-width: 1150px) {
        .bottomBarButton {
          font-size: 1.5vw;
          font-weight: 600;
        }
      }
    }

    .allCategories {
      display: flex;
      position: absolute;
      width: 13vw;
      left: 0;
      margin-left: 3rem;
      align-items: center;
      justify-content: center;

      select {
        background: none;
        border: none;
      }
      svg {
        margin-right: 0.5rem;
      }

      @media only screen and (max-width: 990px) {
        margin-left: 1rem;
        font-size: 10px;

        .alignJustify {
          font-size: 10px;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  `}
`;

export const NavIcons = styled.div`
  display: flex;
  min-width: 17vw;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  right: 0;
  flex-wrap: nowrap;
  margin-right: 5rem;
  margin-bottom: 35px;

  .icon {
    color: #fff;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 5px;
  }

  .iconDiv,
  .iconDiv2 {
    display: flex;
    flex-direction: column;
    font-size: 15px;
  }

  .iconDiv2 {
    margin: 0 3rem;
  }

  @media only screen and (max-width: 950px) {
    .iconDiv label,
    .iconDiv2 label {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 40%;
    height: 75px;
    margin-bottom: 100px;
    margin-left: 3rem;
    justify-content: space-evenly;
    margin-right: 1rem;

    .iconDiv2 {
      margin: 0;
      display: none;
    }
  }
`;

export const SearchBar = styled.form`
  display: flex;
  width: 60vw;
  justify-content: center;
  height: 90px;

  .search {
    display: flex;
    width: 100%;
    height: fit-content;
  }

  .searchBar {
    width: 55%;
    height: 50px;
    font-size: 20px;
    display: flex;
    border-radius: 0;
    background: var(#fff, #fefdfd);
    border: none;
  }

  .submitButton {
    display: flex;
    width: 45px;
    height: 50px;
    border-radius: 3px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    background-color: #e8712e;
    color: #fff;
    float: right;
    margin-left: 1rem;
    border: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 1260px) {
    justify-content: start;
  }
  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 60%;

    .searchBar {
      width: 90%;
      height: 37px;
    }

    .submitButton {
      height: 37px;
    }
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 18%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  flex-wrap: nowrap;
  margin-right: 5rem;
  margin-bottom: 35px;

  @media only screen and (max-width: 768px) {
    width: 40%;
    height: 75px;
    margin-bottom: 100px;
    margin-left: 3rem;
  }
`;

export const Button = styled.button`
  padding: 1.7vh 1.5%;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  font-size: 1.5rem;
  border: none;
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `}
  height: auto;
  width: 100%;
  max-width: 150px;
`;
