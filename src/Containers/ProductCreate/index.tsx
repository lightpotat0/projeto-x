import Head from 'next/head';
import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import { Container, Form, Subtitle, Title, ContainerHeader } from './styles';
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

export default function ProductCreatePage() {

  return (
    <>
      <Head>
        <title>Axarca - Cadastro Produto</title>
      </Head>
      <Header />
      <Container>
        <ContainerHeader>
          <Title className={oswald.className}>Novo Produto</Title>
          <Subtitle className={oswald400.className}>
            Cadastre um produto para venda no marketplace
          </Subtitle>
        </ContainerHeader>
        <Form>
          <ProductForm />
        </Form>
      </Container>
      <Footer />
    </>
  );
}
