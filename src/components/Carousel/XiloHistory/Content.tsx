import { Oswald } from 'next/font/google';
import React from 'react';
import background from '../../../config/img/backFirstWord.svg';
import { theme } from '@/styles/theme';

type PropType = {
  title1: string;
  title2: string;
  title2FirstWord: string;
  text: string;
  dotName: string;
};

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
});

const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

const Content: React.FC<PropType> = (props) => {
  const { title1, title2, text, title2FirstWord, dotName } = props;

  return (
    <>
      <div className="mainText">
        <div className="titles">
          <h1 className={oswald400.className}>{title1}</h1>
          <h1
            className={oswald400.className}
            style={{ color: theme.colors.secondary }}
          >
            {dotName}
          </h1>
        </div>
        <h2 className={oswald.className}>
          <span
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {title2FirstWord}
          </span>
          {title2}
        </h2>
        <p className={oswald400.className}>{text}</p>
      </div>
    </>
  );
};

export default Content;
