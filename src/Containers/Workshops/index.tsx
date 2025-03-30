import ColorButton from '@/components/Buttons/ColorButton';
import { theme } from '@/styles/theme';
import { Oswald } from 'next/font/google';
import { useRouter } from 'next/router';
import background from '../../config/img/backFirstWord.svg';
import {
  Content,
  ContentSection,
  ImgDiv,
  MainText,
  MidContent,
} from './styled';
import Head from 'next/head';
import { Header } from '@/components/Header/Index';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import backgroundMidContent from '@/config/img/midBgWorkshop.svg';
import { MainContent } from '../AboutUs/styles';
import { MdArrowOutward } from 'react-icons/md';

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});
const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

export default function WorkshopPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Axarca - Oficinas</title>
      </Head>
      <Header />
      <MainContent>
        <div className="main">
          <div className="mainText">
            <h1 className={oswald400.className}>Oficinas e Visitações</h1>
            <h2 className={oswald.className}>
              Os artesãos da associação realizam diversas{' '}
              <span
                style={{
                  backgroundImage: `url(${background.src})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                oficinas
              </span>{' '}
              de Xilogravura e Cordel
            </h2>
            <div className="textImage">
              <p className={oswald400.className}>
                Elas podem ser realizadas dentro da própria Lira Nordestina ou
                no local de desejo do contratante. Muitas já foram feitas para o
                SESC e nas Universidades da região. É possível realizar as
                oficinas com todo tipo de faixa hetária, o aprendizado é
                extremamente enriquecedor em cultura e criatividade. Para
                contratar a AXARCA para realizar uma oficina basta entrar em
                contato com alguém da Associação através de um dos contatos
                dispostos no site. Lembre-se de marcar notificando a idade e
                qual processo será desejado. A oficina dispõe de uma indicação
                educacional em relação aos processos feitos para a criação da
                xilogravura e do cordel, dentre outros aspectos. positivos para
                o crescimento cultural e academico dos participantes.
              </p>
            </div>
            <div className="buttons">
              <div
                className="button1"
                onClick={() => router.push('/workshops')}
              >
                <ColorButton
                  padding="15px 30px"
                  backgroundColor={theme.colors.secondary}
                  content="Participar das oficinas"
                  fontSize="19px"
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
                  content="Participar"
                  fontSize="19px"
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
                src="/img/bgworkshop1.svg"
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
      </MainContent>

      <ContentSection>
        <ImgDiv>
          <Image
            src="/img/bgworkshop2.svg"
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
        <MainText>
          <h2
            className={oswald.className}
            style={{ color: theme.colors.lightPrimary }}
          >
            Os artesãos da associação realizam diversas oficinas de Xilogravura
            e Cordel
          </h2>
          <p className={oswald400.className}>
            Elas podem ser realizadas dentro da própria Lira Nordestina ou no
            local de desejo do contratante. Muitas já foram feitas para o SESC e
            nas Universidades da região. É possível realizar as oficinas com
            todo tipo de faixa hetária, o aprendizado é extremamente
            enriquecedor em cultura e criatividade. Para contratar a AXARCA para
            realizar uma oficina basta entrar em contato com alguém da
            Associação através de um dos contatos dispostos no site. Lembre-se
            de marcar notificando a idade e qual processo será desejado. A
            oficina dispõe de uma indicação educacional em relação aos processos
            feitos para a criação da xilogravura e do cordel, dentre outros
            aspectos. positivos para o crescimento cultural e academico dos
            participantes.
          </p>
          <p
            className={oswald400.className}
            style={{
              color: theme.colors.secondary,
              cursor: 'pointer',
            }}
          >
            Saiba Mais <MdArrowOutward size={15} />
          </p>
        </MainText>
      </ContentSection>

      <ContentSection>
        <MainText style={{ paddingLeft: '2rem' }}>
          <h2
            className={oswald.className}
            style={{ color: theme.colors.lightPrimary }}
          >
            Um local, cheio de história e cultura
          </h2>
          <p className={oswald400.className}>
            A Lira Nordestina e a AXARCA possuem seu local, cheio de pedaços da
            história da Xilogravura no Cariri e seus artesãos. Portanto, os
            artesãos que permeiam a locação, e, principalmente, José Lourenço
            oferecem visitações ao prédio, mostrando a loja, o local onde eles
            fazem os desenhos, onde eles carvam a madeira, os utensílios
            utilizados para tal, as maquinas que são usadas para criar as cópias
            e os materiais da antiga tipografia São Francisco.
          </p>
          <p
            className={oswald400.className}
            style={{
              color: theme.colors.secondary,
              cursor: 'pointer',
            }}
          >
            Saiba Mais <MdArrowOutward size={15} />
          </p>
        </MainText>
        <ImgDiv>
          <Image
            src="/img/bgworkshop2.svg"
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

      <ContentSection>
        <ImgDiv>
          <Image
            src="/img/bgworkshop2.svg"
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
        <MainText>
          <h2
            className={oswald.className}
            style={{ color: theme.colors.lightPrimary }}
          >
            O que você vai encontrar lá:
          </h2>
          <p className={oswald400.className}>
            Existe todo um maquinário que marca o começo da história da
            tipografia no Ceará, então, durante essas visitações estudantes de
            diversos cursos e escolas podem observar de perto a história e a
            tradição que ela deixou para o povo do Cariri, fornecendo arte e um
            meio de emprego intrinsecamente ligado a nossa cultura sertaneja.
            Para marcar uma visitação basta entrar em contato com alguém da
            Associação através de um dos contatos dispostos no site.
          </p>
          <p
            className={oswald400.className}
            style={{
              color: theme.colors.secondary,
              cursor: 'pointer',
            }}
          >
            Saiba Mais <MdArrowOutward size={15} />
          </p>
        </MainText>
      </ContentSection>

      <Footer />
    </>
  );
}
