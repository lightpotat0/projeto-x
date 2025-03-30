import Head from 'next/head';
import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import {
  Button,
  Container,
  Form,
  Subtitle,
  Title,
  InputsContainer,
  ContainerHeader,
  InputImageContainer,
} from './styles';
import { Oswald } from 'next/font/google';
import { useState } from 'react';
import ProductForm from '@/components/ProductFormData';

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});
const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

export default function ProductEditPage({ id }: { id?: number }) {
  return (
    <>
      <Head>
        <title>Axarca - Cadastro Produto</title>
      </Head>
      <Header />
      <Container>
        <ContainerHeader>
          <Title className={oswald.className}>
            {id ? 'Editar' : 'Novo'} Produto
          </Title>
          <Subtitle className={oswald400.className}>
            Cadastre um produto para venda no marketplace
          </Subtitle>
        </ContainerHeader>
        <Form>
          <ProductForm id={id} />
        </Form>
      </Container>
      <Footer />
    </>
  );
}
