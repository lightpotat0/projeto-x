import Head from 'next/head';
import {
  FaHistory,
  FaShoppingCart,
  FaHeart,
  FaCreditCard,
  FaSignOutAlt,
  FaCog,
  FaTruck,
} from 'react-icons/fa';
import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import { Container } from './styles';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import ProductCardEdit from '@/components/ProductCard/ProductCardEdit';
import img from '@/config/img/productImg.svg';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function UserAreaPage() {
  const router = useRouter();
  const [items, setItems] = useState<
    {
      id: number;
      title: string;
      value: number;
      avatarUrl?: string;
    }[]
  >([]);
  const fetch = async () => {
    await axios.get('/api/products').then(async (data) => {
      setItems(data.data);
    });
  };
  function formatarDinheiro(valor: number) {
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
      <Head>
        <title>Axarca - Área do Usuário</title>
      </Head>
      <Header />
      <Container>
        {items.map((item) => (
          <ProductCardEdit
            id={item.id}
            key={item.id}
            title={item.title}
            price={formatarDinheiro(item.value)}
            onClick={() => router.push(`/user/product/${item.id}`)}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}
