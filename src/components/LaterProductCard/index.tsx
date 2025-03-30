import { Oswald } from 'next/font/google';
import React from 'react';
import { Card } from 'react-bootstrap';
import {
  ButtonCard,
  ButtonContainer,
  CardTitle,
  Price,
  ShoppingCartButton,
  TextContainer,
} from './styled';

import { MdShoppingBag } from 'react-icons/md';
import { useMediaQuery } from '@mui/material';

type PropType = {
  img: string;
  title: string;
  price: string;
  BestSeller: boolean;
  onClick: () => void;
};

const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

const LaterProductCard: React.FC<PropType> = (props) => {
  const { img, title, price, BestSeller, onClick } = props;
  const px1100 = useMediaQuery('(max-width: 1100px)');
  const mobile = useMediaQuery('(max-width: 768px)');
  return (
    <Card
      onClick={onClick}
      style={{
        boxShadow: '-2px 6px 15px 0px rgba(0, 0, 0, 0.25)',
        marginRight: 0,
        width: mobile ? '41.5vw' : '20vw',
        background: 'rgba(254, 253, 253, 1)',
        border:
          mobile && BestSeller !== false
            ? '10px solid rgba(254, 253, 253, 1)'
            : 'none',
        borderRadius: '8px',
        opacity: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body
        className={oswald400.className}
        style={{
          paddingBottom: mobile ? 0 : '5vh',
          width: '100%',
          border: BestSeller ? 0 : '10px solid rgba(254, 253, 253, 1)',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardTitle>{title}</CardTitle>
        <TextContainer>
          <Price>R${price}</Price>
          {mobile ? (
            <ShoppingCartButton>
              <MdShoppingBag size={px1100 ? 20 : 30} />
            </ShoppingCartButton>
          ) : (
            <Card.Text style={{ fontSize: '1vw' }}>
              Parcelado em ate 4x sem juros
            </Card.Text>
          )}
        </TextContainer>
        {mobile ? null : (
          <ButtonContainer>
            <ButtonCard>Comprar</ButtonCard>
            <ShoppingCartButton>
              <MdShoppingBag size={px1100 ? 20 : 30} />
            </ShoppingCartButton>
          </ButtonContainer>
        )}
      </Card.Body>
    </Card>
  );
};

export default LaterProductCard;
