import React from 'react';
import { CarouselContainerMobile, ContentMobile } from './styled';
import background from '@/config/img/joseLourenco.svg';
import { Oswald } from 'next/font/google';
import Image from 'next/image';

const oswald = Oswald({ subsets: ['latin'] });

const OurMastersMobile = () => {
  return (
    <>
      <CarouselContainerMobile>
        <ContentMobile>
          <div>
            <div className="photo">
              <Image
                src={background.src}
                height={100}
                width={100}
                quality={100}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                }}
                alt="teste"
              />
            </div>
            <p
              className={oswald.className}
              style={{ color: '#fff', textAlign: 'center' }}
            >
              teste
            </p>
          </div>
          <div className="middle">
            <div className="photo">
              <Image
                src={background.src}
                height={100}
                width={100}
                quality={100}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                }}
                alt="teste"
              />
            </div>
            <p
              className={oswald.className}
              style={{ color: '#fff', textAlign: 'center' }}
            >
              teste
            </p>
          </div>
          <div>
            <div className="photo">
              <Image
                src={background.src}
                height={100}
                width={100}
                quality={100}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                }}
                alt="teste"
              />
            </div>
            <p
              className={oswald.className}
              style={{ color: '#fff', textAlign: 'center' }}
            >
              teste
            </p>
          </div>
          <div>
            <div className="photo">
              <Image
                src={background.src}
                height={100}
                width={100}
                quality={100}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                }}
                alt="teste"
              />
            </div>
            <p
              className={oswald.className}
              style={{ color: '#fff', textAlign: 'center' }}
            >
              teste
            </p>
          </div>
          <div className="middle">
            <div className="photo">
              <Image
                src={background.src}
                height={100}
                width={100}
                quality={100}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                }}
                alt="teste"
              />
            </div>
            <p
              className={oswald.className}
              style={{ color: '#fff', textAlign: 'center' }}
            >
              teste
            </p>
          </div>
          <div>
            <div className="photo">
              <Image
                src={background.src}
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
            <p
              className={oswald.className}
              style={{ color: '#fff', textAlign: 'center' }}
            >
              teste
            </p>
          </div>
        </ContentMobile>
      </CarouselContainerMobile>
      <CarouselContainerMobile>
        <ContentMobile />
      </CarouselContainerMobile>
      <CarouselContainerMobile>
        <ContentMobile />
      </CarouselContainerMobile>
    </>
  );
};

export default OurMastersMobile;
