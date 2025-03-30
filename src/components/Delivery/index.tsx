import React from 'react';
import styled from 'styled-components';

const DeliveryContainer = styled.div`
  padding: 20px;
  border-top: 1px solid #e0e0e0;
`;

const DeliveryInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #e0e0e0;
`;

const DeliveryButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff5722;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const Delivery = () => (
  <DeliveryContainer>
    <DeliveryInput type="text" placeholder="CEP *" />
    <DeliveryButton>OK</DeliveryButton>
  </DeliveryContainer>
);
