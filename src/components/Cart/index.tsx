import React from 'react';
import styled from 'styled-components';
import img from '@/config/img/productImg.svg';

const CartItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const ItemDetails = styled.div`
  display: flex;
`;

const ItemImage = styled.img`
  width: 100px;
  margin-right: 20px;
`;

const ItemInfo = styled.div``;

const ItemName = styled.div`
  font-weight: bold;
`;

const ItemPrice = styled.div`
  color: #ff5722;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const QuantityButton = styled.button`
  border: 1px solid #e0e0e0;
  background: #fff;
  padding: 5px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  color: #ff5722;
  cursor: pointer;
`;

export const Cart = () => (
  <div>
    <CartItem>
      <ItemDetails>
        <ItemImage src={img.src} alt="item" />
        <ItemInfo>
          <ItemName>Caneca</ItemName>
          <ItemPrice>R$ 39,99</ItemPrice>
        </ItemInfo>
      </ItemDetails>
      <ItemActions>
        <Quantity>
          <QuantityButton>-</QuantityButton>
          <span>1</span>
          <QuantityButton>+</QuantityButton>
        </Quantity>
        <div style={{display:'flex',flexDirection: 'column'}}>
          <RemoveButton>Remover</RemoveButton>
          <RemoveButton>Guardar para Depois</RemoveButton>
        </div>
      </ItemActions>
    </CartItem>
   
  </div>
);
