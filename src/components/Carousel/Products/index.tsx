import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { CarouselContainer } from './styled';
import img from '@/config/img/productImg.svg';
import { useRouter } from 'next/router';
import axios from 'axios';

type PropType = {
  bestSeller: boolean;
};

const Products: React.FC<PropType> = (props) => {
  const { bestSeller } = props;
  const [items, setItems] = useState<
    {
      id: number;
      title: string;
      value: number;
      avatarUrl?: string;
    }[]
  >([]);
  const router = useRouter();
  const fetch = async () => {
    try {

      const response = await axios.get('/api/products');
      const products = response.data;
      setItems(products);

      for (let i = 0; i < products.length; i++) {
        await getAvatarURL(products[i].id, i);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  async function getAvatarURL(index: number) {
    await axios
      .get(`/api/products/${items[index].id}/avatar`, {
        responseType: 'blob',
      })
      .then((response) => {
        const url = URL.createObjectURL(response.data);
        const masterUpdate = [...items];
        masterUpdate[index].avatarUrl = url;
        setItems(masterUpdate);
        console.log(items);
      });
  }
  function formatarDinheiro(valor) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      {items.map((item) => (
        <CarouselContainer key={item.id}>
          <ProductCard
            img={item.avatarUrl || ''}
            title={item.title}
            price={formatarDinheiro(item.value)}
            BestSeller={bestSeller}
            id={item.id}
            onClick={() => router.push(`../product/${item.id}`)}
          />
        </CarouselContainer>
      ))}
    </>
  );
};

export default Products;
