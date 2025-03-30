import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
`;

const EmailInput = styled(Input)`
  /* Add additional styles for the email input here */
`;

const PasswordInput = styled(Input)`
  /* Add additional styles for the password input here,  like setting it to password type*/
  input[type='password'] {
    font-family: monospace;
  }
`;

function EmailAndPasswordInput() {
  return (
    <InputContainer>
      <EmailInput type="email" placeholder="E-mail" />
      <PasswordInput type="password" placeholder="Senha" />
    </InputContainer>
  );
}

export default EmailAndPasswordInput;
