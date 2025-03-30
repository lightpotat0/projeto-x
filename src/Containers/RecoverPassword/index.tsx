import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Index';
import Head from 'next/head';
import { Oswald } from 'next/font/google';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  InputsContainer,
  RegisterLink,
  Subtitle,
  Title,
} from './styles';
const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});
const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});
export default function RecoveryPasswordPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Axarca - Recuperação de senha</title>
      </Head>
      <Header />
      <Container>
        <Form>
          <Title className={oswald.className}>Esqueceu a Senha?</Title>
          <Subtitle className={oswald400.className}>
            Digite o endereço de e-mail ou número de celular associado à sua
            conta da AXARCA.
          </Subtitle>

          <InputsContainer>
            <Input type="email" placeholder="E-mail" />
          </InputsContainer>

          <Button onClick={() => {}}>ENVIAR CÓDIGO</Button>

          <RegisterLink className={oswald400.className}>
            Já tem conta? <a href="/login">Entre</a>
          </RegisterLink>
          <RegisterLink className={oswald400.className}>
            Não tem conta? <a href="/register">Inscrever-se</a>
          </RegisterLink>

          <Subtitle className={oswald400.className}>
            Você pode entrar em contato com o Atendimento ao Cliente para obter
            ajuda para restaurar o acesso à sua conta.
          </Subtitle>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
