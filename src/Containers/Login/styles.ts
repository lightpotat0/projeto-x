import styled from 'styled-components';

// Styled Components
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28vh;
  height: fit-content;
  width: 100%;
  background-color: #fff;
`;

export const Form = styled.div`
  background-color: white;
  margin: 30px;
  padding: 2rem;
  border-radius: 8px;

  text-align: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #e8712e;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: #03014c;
  margin-bottom: 30px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  margin: 10px;
  padding: 16px;
  background-color: #ddd;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #818181;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  width: 90%;
  padding: 0.75rem;
  margin-top: 10px;
  margin-bottom: 15px;
  background-color: #e8712e;
  color: white;
  border: none;
  border-radius: 52px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #c0392b;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5%;
  color: #818181;
  font-size: 14px;

  a {
    color: #818181;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ExternalLogin = styled.div`
  display: flex;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 1rem;
`;

export const ExternalButton = styled.button`
  flex: 1;
  margin: 10px;
  justify-content: center;
  gap: 5px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }
`;

export const RegisterLink = styled.p`
  a {
    text-decoration: none;
    color: #898989;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InputField = styled.input`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
