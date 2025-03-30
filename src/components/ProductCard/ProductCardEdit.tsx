import { Oswald } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import {
  ButtonCard,
  ButtonContainer,
  CardEditHeader,
  CardTitle,
  Price,
  ShoppingCartButton,
  TextContainer,
} from './styled';

import { MdArrowOutward } from 'react-icons/md';
import { useMediaQuery } from '@mui/material';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/router';

type PropType = {
  title: string;
  price: string;
  onClick: () => void;
  id?: number;
};

const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

const ProductCardEdit: React.FC<PropType> = (props) => {
  const { title, price, onClick, id } = props;
  const [urlImage, setUrlImage] = useState('');
  const router = useRouter();
  const px1100 = useMediaQuery('(max-width: 1100px)');
  const mobile = useMediaQuery('(max-width: 768px)');
  async function getAvatarURL() {
    await axios
      .get(`/api/products/${id}/avatar`, {
        responseType: 'blob',
      })
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        setUrlImage(url);
      });
  }
  async function handleDelete() {
    await axios
      .delete(`/api/products/${id}/delete`)
      .then(() => router.reload());
  }
  useEffect(() => {
    getAvatarURL();
  }, [id]);
  return (
    <Card
      style={{
        boxShadow: '-2px 6px 15px 0px rgba(0, 0, 0, 0.25)',
        marginRight: 0,
        width: mobile ? '41.5vw' : '20vw',
        background: 'rgba(254, 253, 253, 1)',
        border: mobile !== false ? '10px solid rgba(254, 253, 253, 1)' : 'none',
        borderRadius: '8px',
        opacity: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card.Img variant="top" src={urlImage} />
      <Card.Body
        className={oswald400.className}
        style={{
          paddingBottom: mobile ? 0 : '5vh',
          width: '100%',
          border: '10px solid rgba(254, 253, 253, 1)',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardEditHeader>
          <div>{title}</div>
          <div>{price}</div>
        </CardEditHeader>
        <TextContainer>
          {mobile ? (
            <ShoppingCartButton>
              <FaPencilAlt size={px1100 ? 20 : 30} />
            </ShoppingCartButton>
          ) : (
            <></>
          )}
        </TextContainer>
        {mobile ? null : (
          <ButtonContainer>
            <ButtonCard onClick={onClick}>
              Editar Produto <FaPencilAlt size={px1100 ? 15 : 20} />
            </ButtonCard>
            <ButtonCard onClick={handleDelete}>
              <FaTrashAlt size={px1100 ? 15 : 20} />
            </ButtonCard>
          </ButtonContainer>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCardEdit;
