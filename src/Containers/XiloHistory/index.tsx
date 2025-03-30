import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Index';
import Head from 'next/head';
import { MainContent } from './styled';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';

export default function XiloHistoryPage() {
  const SLIDETYPE: string = 'xiloHistorySlide';
  const mobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Head>
        <title>Axarca - História da Xilo</title>
      </Head>
      <Header />
      <MainContent>
        <div className="teste">
          <Image
            src="/img/Frame.svg"
            fill
            quality={100}
            style={{
              zIndex: '-10',
              objectFit: 'contain',
            }}
            alt="teste"
          />
        </div>
        {mobile ? (
          <Carousel
            slideType={SLIDETYPE}
            options={{ axis: 'y', align: 'start' }}
          />
        ) : (
          <Carousel slideType={SLIDETYPE} options={{ align: 'start' }} />
        )}
      </MainContent>
      <Footer />
    </>
  );
}
