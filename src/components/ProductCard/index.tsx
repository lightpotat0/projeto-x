import { Oswald } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import {
  ButtonCard,
  ButtonContainer,
  CardTitle,
  Price,
  ShoppingCartButton,
  TextContainer,
} from './styled';

import { MdArrowOutward } from 'react-icons/md';
import { useMediaQuery } from '@mui/material';
import { Router, useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';

type PropType = {
  img: string;
  title: string;
  price: string;
  BestSeller: boolean;
  onClick: () => void;
  id: number;
};

const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

const ProductCard: React.FC<PropType> = (props) => {
  const { img, title, price, BestSeller, onClick, id } = props;
  const [imageSrc, setImageSrc] = useState('');
  const px1100 = useMediaQuery('(max-width: 1100px)');
  const mobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const fetch = async () => {
    await axios
      .get(`/api/products/${id}/avatar`, {
        responseType: 'blob',
      })
      .then((response) => {
        const url = URL.createObjectURL(response.data);

        setImageSrc(url);
      });
  };
  useEffect(() => {
    if (id) {
      fetch();
    }
  }, [id]);
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
      <Card.Img
        variant="top"
        src={imageSrc || img}
        style={{
          height: '200px', // Altura fixa
          width: '100%', // Largura 100% do Card
          objectFit: 'cover', // Recorta o excesso
        }}
      />

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
          <Price>{price}</Price>
          {mobile ? (
            <ShoppingCartButton>
              <MdArrowOutward size={px1100 ? 20 : 30} />
            </ShoppingCartButton>
          ) : (
            <Card.Text style={{ fontSize: '1vw' }}>
              Parcelado em ate 4x sem juros
            </Card.Text>
          )}
        </TextContainer>
        {mobile ? null : (
          <ButtonContainer>
            <ButtonCard onClick={() => router.push('../product/' + id)}>
              Saiba mais <MdArrowOutward size={px1100 ? 15 : 25} />
            </ButtonCard>
          </ButtonContainer>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
