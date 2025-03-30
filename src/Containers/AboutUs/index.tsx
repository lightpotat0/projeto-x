import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Index';
import Head from 'next/head';
import {
  MainContent,
  MidContent,
  SupportUs2Container,
  SupportUsContainer,
} from './styles';
import { Oswald } from 'next/font/google';
import ColorButton from '@/components/Buttons/ColorButton';
import { theme } from '@/styles/theme';
import backgroundMidContent from '../../config/img/background-mid-content.svg';
import background from '../../config/img/bgMainContentAboutUs.svg';
import backgroundMobile from '../../config/img/aboutUsMobileImage.svg';
import background2 from '../../config/img/bgBuyArt.svg';
import aboutUsData from '@/config/img/aboutUsData.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import {
  ButtonScroll,
  CardSection,
  HomeTitle,
  MediaContainer,
} from '../Home/styles';
import Carousel from '@/components/Carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { EmblaOptionsType } from 'embla-carousel';
const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});
const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});
const oswald200 = Oswald({
  subsets: ['latin'],
  weight: '200',
});
export default function AboutUsPage() {
  const router = useRouter();
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  const SLIDETYPE: string = 'ourMastersSlide';
  const OPTIONSMOBILE: EmblaOptionsType = { align: 'start' };
  const SLIDETYPEMOBILE: string = 'ourMastersMobile';
  const [mainButtonFS, setMainButtonFS] = useState('19px');
  const [suppButtonFS, setSuppButtonFS] = useState('28px');
  const [actionPrevButtonMasters, setActionPrevButtonMasters] = useState(0);
  const [actionNextButtonMasters, setActionNextButtonMasters] = useState(0);

  const mobile = useMediaQuery('(max-width: 768px)');
  const w550 = useMediaQuery('(max-width: 550px)');

  useEffect(() => {
    if (mobile) {
      if (w550) {
        setMainButtonFS('12px');
        setSuppButtonFS('19px');
      } else {
        setMainButtonFS('19px');
        setSuppButtonFS('28px');
      }
    }
  }, [mobile, w550]);

  return (
    <>
      <Head>
        <title>Axarca - Sobre Nós</title>
      </Head>
      <Header />
      <MainContent>
        <div className="main">
          <div className="mainText">
            <h1 className={oswald400.className}>Sobre nós</h1>
            <h2 className={oswald.className}>
              PROMOVER A
              <span
                style={{
                  backgroundImage: `url(${background.src})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {' '}
                PRESERVAÇÃO
              </span>{' '}
              DA NOSSA CULTURA E PROPORCIONAR ÀS FUTURAS GERAÇÕES OPORTUNIDADES
              ÍMPAR DE OLHAR PARA O PASSADO
            </h2>
            <div className="textImage">
              <p className={oswald400.className}>
                A associação segue buscando promover a preservação da nossa
                cultura e proporcionar às futuras gerações uma oportunidade
                ímpar de olhar para o passado reconhecendo as raízes de nossa
                gente, e, a partir dessa experiência com a nossa identidade,
                preparar um bom caminho para o futuro. Essa é a nossa missão!
              </p>
              <div className="img">
                <Image
                  src={backgroundMobile.src}
                  height={100}
                  width={100}
                  quality={100}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  alt="teste"
                />
              </div>
            </div>
            <div className="buttons">
              <div
                className="button1"
                onClick={() => router.push('/workshops')}
              >
                <ColorButton
                  padding="15px 30px"
                  backgroundColor={theme.colors.secondary}
                  content="Oficinas e Visitações"
                  fontSize={mainButtonFS}
                  borderRadius="4px"
                  border="none"
                  color={theme.colors.white}
                  margin="0"
                />
              </div>
              <div
                className="button2"
                onClick={() => router.push('/xilo-history')}
              >
                <ColorButton
                  padding="15px 30px"
                  backgroundColor="none"
                  content="História da xilo"
                  fontSize={mainButtonFS}
                  borderRadius="4px"
                  border="3px solid rgba(232, 113, 46, 1)"
                  color={theme.colors.secondary}
                  margin="0"
                />
              </div>
            </div>
          </div>
          <div className="photo">
            <div className="photoImg">
              <Image
                src="/img/mobileBgHome.svg"
                height={100}
                width={100}
                quality={100}
                alt="foto de uma oficina"
                style={{
                  width: '45vw',
                  height: '50%',
                }}
              />
            </div>
          </div>
        </div>

        <MidContent
          style={{
            backgroundColor: '#895D47',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="mainContainer">
            <div className="axarcaData">
              <div className="data" style={{ marginBottom: '5rem' }}>
                <p className="number">
                  <span className={oswald.className}>10+</span>
                </p>
                <p className="dataText">
                  <span className={oswald400.className}>
                    A AXARCA CONTA COM MAIS DE 10 ARTESÃOS LOCAIS.
                  </span>
                </p>
              </div>
              <div className="data" style={{ marginBottom: '5rem' }}>
                <p className="number">
                  <span className={oswald.className}>600+</span>
                </p>
                <p className="dataText">
                  <span className={oswald400.className}>
                    SÃO MAIS DE 600 OBRAS ÚNICAS PRODUZIDAS.
                  </span>
                </p>
              </div>
              <div className="data">
                <p className="number">
                  <span className={oswald.className}>2012</span>
                </p>
                <p className="dataText">
                  <span className={oswald400.className}>
                    SEGUIMOS NESSA JOPRNADA A MAIS DE 10 ANOS.
                  </span>
                </p>
              </div>
            </div>
            <div className="line"></div>

            <div className="midText">
              <div className="title">
                <h2>
                  <span className={oswald.className}>
                    UM POUCO MAIS SOBRE A HISTÓRIA DA FUNDAÇÃO DA AXARCA
                  </span>
                </h2>
              </div>
              <div className="paragraphs">
                <p>
                  <span className={oswald400.className}>
                    A Associação dos Xilógrafos e Artesãos do Cariri – AXARCA,
                    foi fundada no ano de 2012, fruto de uma parceria entre
                    xilógrafos e artesãos oriundos da antiga tipografia São
                    Francisco, atual Lira Nordestina
                  </span>
                </p>
                <p>
                  <span className={oswald400.className}>
                    Fundada com o intuito de congregar e promover o resgate da
                    arte popular caririense, a AXARCA desenvolve projetos de
                    apoio e disseminação da xilogravura, pintura, escultura,
                    entre outras artes, através da realização oficinas,
                    exposições e visitações guiadas.
                  </span>
                </p>
                <p>
                  <span className={oswald400.className}>
                    A associação também apoia o artesão no tocante à valorização
                    do mesmo como profissional. Grande parte dos seus associados
                    é pioneira na arte da xilogravura, como os irmãos José,
                    Cicero e Demontier Lourenço, Nilo, Airton Laurindo e Cosmo
                    Brás.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </MidContent>

        <CardSection>
          {mobile ? (
            <div className="ourMasters" id="ourMasters">
              <div className="ourMastersMobile">
                <div className="elements">
                  <HomeTitle className={oswald.className}>
                    Nossos Mestres
                  </HomeTitle>
                  <Carousel
                    slideType={SLIDETYPEMOBILE}
                    options={OPTIONSMOBILE}
                    actionNextButton={actionNextButtonMasters}
                    actionPrevButton={actionPrevButtonMasters}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <HomeTitle className={oswald.className}>
                Nossos Mestres{' '}
                <div style={{ marginRight: '5vw' }}>
                  <ButtonScroll
                    className="prev"
                    onClick={() =>
                      setActionPrevButtonMasters(actionPrevButtonMasters + 1)
                    }
                  >
                    <FaChevronLeft size={20} />
                  </ButtonScroll>
                  <ButtonScroll
                    className="next"
                    onClick={() =>
                      setActionNextButtonMasters(actionNextButtonMasters + 1)
                    }
                  >
                    <FaChevronRight size={20} />
                  </ButtonScroll>
                </div>
              </HomeTitle>
              <div className="ourMasters" id="ourMasters">
                <Carousel
                  slideType={SLIDETYPE}
                  options={OPTIONS}
                  actionNextButton={actionNextButtonMasters}
                  actionPrevButton={actionPrevButtonMasters}
                />
              </div>
            </>
          )}
        </CardSection>

        <CardSection>
          <SupportUs2Container>
            <div className="content">
              <Image
                src="/img/mobileBgHome.svg"
                height={1000}
                width={1000}
                quality={100}
                alt="foto de uma oficina"
                style={{
                  width: '45vw',
                  height: '50%',
                }}
              />
              <div className="textContent">
                <div className="textHeader">
                  <h3 className={oswald400.className}>Apoie-nos</h3>
                  <br />
                  <h3 className={oswald.className}>Compre uma obra única</h3>
                </div>
                <div className="textBody">
                  <div className="mainText">
                    <p className={oswald200.className}>
                      Você sabia que além de adquirir uma peça única, comprando
                      qualquer produto da nossa loja garante o sustento de
                      diversos artesãos, e ainda por cima contribui para a
                      missão da manutenção, preservação e divulgação dos saberes
                      artesanais que compõem a cultura caririense?
                    </p>
                  </div>
                  <div className="buttonContainer">
                    <ColorButton
                      border="3px solid white"
                      color={theme.colors.white}
                      content="Veja nossos produtos"
                      backgroundColor={theme.colors.secondary}
                      borderRadius="10px"
                      fontSize="23px"
                      margin="0px"
                      padding="15px 40px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SupportUs2Container>
        </CardSection>
      </MainContent>
      <Footer />
    </>
  );
}
