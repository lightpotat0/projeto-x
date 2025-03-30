import { styled } from 'styled-components';

// Styled Components
export const Container = styled.div`
  justify-content: center;
  align-items: center;
  padding-top: 28vh;
  height: fit-content;
  width: 100%;
  background-color: #fff;
`;


export const CartHeader = styled.div`
  text-align: 'center';
  padding: 10px;
  font-size: 18px;
  color: #ff5722;
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const CartSection = styled.div`
  flex: 3;
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SummarySection = styled.div`
  flex: 1;
  background: #fff;
  padding: 20px;
  margin-left: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CartFooter = styled.div`
  text-align: center;
  padding: 20px;
  background: #f5f5f5;
`;
