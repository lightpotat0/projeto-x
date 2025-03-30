import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Index';
import Head from 'next/head';
import { ButtonScroll, CardSection, HomeTitle, MediaContainer } from './styles';
import { Lato, Oswald } from 'next/font/google';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from '@/styles/theme';
import { Content, ContentSection, ImgDiv, MainText } from '../Workshops/styled';
import ColorButton from '@/components/Buttons/ColorButton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { enviarParaWhatsApp } from '@/utils/whatsapp';

const lato = Lato({
  subsets: ['latin'],
  weight: '300',
});

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

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  const SLIDETYPE: string = 'ourMastersSlide';
  const OPTIONSMOBILE: EmblaOptionsType = { align: 'start' };
  const SLIDETYPEMOBILE: string = 'ourMastersMobile';
  const router = useRouter();
  const mobile = useMediaQuery('(max-width: 768px)');
  const [actionPrevButtonProducts, setActionPrevButtonProducts] = useState(0);
  const [actionNextButtonProducts, setActionNextButtonProducts] = useState(0);
  const [actionPrevButtonMasters, setActionPrevButtonMasters] = useState(0);
  const [actionNextButtonMasters, setActionNextButtonMasters] = useState(0);

  return (
    <>
      <Head>
        <title>Axarca - Home</title>
      </Head>
      <Header />
      <Content>
        <ContentSection>
          <MainText>
            <h2
              className={oswald.className}
              style={{ textTransform: 'capitalize' }}
              color={theme.colors.secondary}
            >
              Contato com o artesão Esse é o diferencial da xilogravura no
              cariri e da AXARCA
            </h2>
            <p className={lato.className} style={{ fontSize: '2rem' }}>
              A Xilografia é uma antiga técnica de origem chinesa, ao que tudo
              indica tendo seu inicio no século II, onde o artesão grava na
              madeira a imagem que pretende reproduzir, utilizando-a como matriz
              e possibilitando a reprodução de diversas imagens idênticas sobre
              papel ou outro suporte adequado...
            </p>
            <div className="buttons" onClick={enviarParaWhatsApp}>
              <ColorButton
                padding="15px 40px"
                backgroundColor={theme.colors.secondary}
                content="Saiba Mais"
                fontSize="19px"
                borderRadius="4px"
                border="none"
                color={theme.colors.white}
                margin="0"
              />
              {/*<div
                className="button2"
                onClick={() => router.push('/xilo-history')}
              >
                <ColorButton
                  padding="15px 40px"
                  backgroundColor="none"
                  content="Saiba Mais"
                  fontSize="19px"
                  borderRadius="4px"
                  border="3px solid rgba(232, 113, 46, 1)"
                  color={theme.colors.secondary}
                  margin="0"
                />
              </div>*/}
            </div>
          </MainText>
          <ImgDiv>
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
          </ImgDiv>
        </ContentSection>
      </Content>

      <CardSection>
        <HomeTitle
          className={oswald.className}
          style={{ color: theme.colors.primary }}
        >
          Os mais vendidos
          <div style={{ marginRight: '5vw' }}>
            <ButtonScroll
              className="prev"
              onClick={() =>
                setActionPrevButtonProducts(actionPrevButtonProducts + 1)
              }
            >
              <FaChevronLeft size={20} />
            </ButtonScroll>
            <ButtonScroll
              className="next"
              onClick={() =>
                setActionNextButtonProducts(actionNextButtonProducts + 1)
              }
            >
              <FaChevronRight size={20} />
            </ButtonScroll>
          </div>
        </HomeTitle>
        <div className="ourMasters" id="ourMasters">
          <Carousel
            slideType="productsCarousel"
            options={OPTIONS}
            bestSeller
            actionPrevButton={actionPrevButtonProducts}
            actionNextButton={actionNextButtonProducts}
          />
        </div>
      </CardSection>

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

      <CardSection className="photoAndVideo">
        <HomeTitle
          className={oswald.className}
          style={{ color: theme.colors.darkPrimary }}
        >
          Vídeos e fotos
        </HomeTitle>
        <MediaContainer>
          <div className="content">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/wnhvanMdx4s?si=74VonJOanWsxQw-i"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                id="iframe-axarca"
                style={{
                  border: 'none',
                }}
              ></iframe>
            </div>
            <div className="textContent">
              <div className="textHeader">
                <h3 className={oswald.className}>
                  Associação completa novamente
                </h3>
              </div>
              <div className="textBody">
                <div className="mainText">
                  <p className={oswald200.className}>
                    Lorem ipsum dolor sit amet consectetur. Et nisl habitant
                    nisl netus congue vivamus cras sagittis. Tincidunt nulla
                    viverra auctor ullamcorper leo consectetur ultricies morbi
                    ultricies. Eget cum arcu lobortis malesuada ac et est eget
                    nisi. Tortor aliquam tellus habitant egestas et consectetur
                    nisl eget habitant.
                  </p>
                </div>
                <div className="buttonContainer">
                  <ColorButton
                    border="3px solid white"
                    color={theme.colors.white}
                    content="Galeria de fotos e vídeos"
                    backgroundColor="transparent"
                    borderRadius="10px"
                    fontSize="23px"
                    margin="0px"
                    padding="15px 40px"
                  />
                </div>
              </div>
            </div>
          </div>
        </MediaContainer>
      </CardSection>

      <Footer />
    </>
  );
}
