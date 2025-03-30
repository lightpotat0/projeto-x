import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  padding: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Summary = () => (
  <SummaryContainer>
    <SummaryItem>
      <span>Valor dos Produtos:</span>
      <span>R$ 39,99</span>
    </SummaryItem>
    <SummaryItem>
      <span>Frete:</span>
      <span>R$ 0,00</span>
    </SummaryItem>
    <SummaryItem>
      <span>Total a prazo:</span>
      <span>R$ 39,99</span>
    </SummaryItem>
    <SummaryItem>
      <span>Valor à vista no Pix:</span>
      <span>R$ 39,99</span>
    </SummaryItem>
  </SummaryContainer>
);
