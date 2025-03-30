import { theme } from '@/styles/theme';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type PropType = {
  imgSrc: string;
  name: string;
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});
const SearchCard: React.FC<PropType> = (props) => {
  const router = useRouter();
  const { imgSrc, name } = props;
  return (
    <>
      <button
        onClick={() => router.push('/')}
        style={{ border: 'none', background: 'none' }}
      >
        <div style={{ width: 'fit-content', height: 'fit-content' }}>
          <Image
            src={imgSrc}
            width={100}
            height={100}
            alt="teste"
            style={{ width: '30vw' }}
          />
          <p
            className={roboto.className}
            style={{
              fontSize: '3vw',
              color: theme.colors.gray,
            }}
          >
            {name}
          </p>
        </div>
      </button>
    </>
  );
};

export default SearchCard;
