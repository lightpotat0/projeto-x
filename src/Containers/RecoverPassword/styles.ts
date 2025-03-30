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
  width: 20%;
  text-align: center;
`;

export const RegisterLink = styled.p`
  margin-top: 1rem;
  color: #e8712e;

  a {
    color: #e8712e;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
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
  width: 60%;
  padding: 0.75rem;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #e8712e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 23px;

  &:hover {
    background-color: #c0392b;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #191c1f;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: #bbb;
  margin-bottom: 30px;
`;
