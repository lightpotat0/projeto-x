import Head from 'next/head';
import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import {
  Button,
  Container,
  Form,
  ImageArea,
  Input,
  InputsContainer,
  Links,
  RegisterLink,
  Subtitle,
  Title,
} from './styles';
import { AuthContext } from '@/context/AuthContext';
import { useContext, useState } from 'react';
import { Oswald } from 'next/font/google';
import backgroundUser from '@/config/img/BackgroundUser.svg';
import titleUser from '@/config/img/TitleUser.svg';
import Image from 'next/image';

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});
const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

export default function LoginPage() {
  const { logIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (email === '' || password === '') {
      return;
    }
    await logIn({
      email,
      password,
    });
  }

  return (
    <>
      <Head>
        <title>Axarca - Login</title>
      </Head>
      <Header />
      <Container>
        <ImageArea>
          <Image
            src={titleUser}
            alt="Caneca-AXARCA Estampada"
            width={0}
            height={'0'}
          />
          <Image
            src={backgroundUser}
            alt="Caneca-AXARCA Estampada"
            width={0}
            height={0}
          />
        </ImageArea>
        <Form>
          <Title className={oswald.className}>Acesse sua conta</Title>
          <Subtitle className={oswald400.className}>
            Entre para continuar e explorar a AXARCA
          </Subtitle>
          <InputsContainer>
            <Input
              type="email"
              placeholder="E-mail ou telefone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputsContainer>

          <Links>
            <a href="/recover-password">Esqueceu sua senha ?</a>
          </Links>

          <Button onClick={handleLogin} className={oswald400.className}>
            Entrar
          </Button>

          <RegisterLink className={oswald400.className}>
            <a href="/register">Cadastrar Conta</a>
          </RegisterLink>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
