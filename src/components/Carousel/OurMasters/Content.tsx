import { Oswald, Roboto } from 'next/font/google';
import Image from 'next/image';
// import Image from 'next/image';
import React from 'react';
import { MdNavigateNext } from 'react-icons/md';

type PropType = {
  masterName: string;
  masterSubtitle: string;
  masterText: string;
  imageSrc: string;
};
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
});
const Content: React.FC<PropType> = (props) => {
  const { masterName, masterSubtitle, masterText, imageSrc } = props;

  return (
    <>
      <div className="photoImage">
        <Image
          src={imageSrc}
          alt=""
          height={500}
          width={500}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </div>
      <div className="text">
        <p className="masterName">
          <span className={roboto.className}>{masterName}</span>
        </p>
        <p className="masterSubtitle">
          <span className={roboto.className}>{masterSubtitle}</span>
        </p>
        <div className="masterText" style={{ paddingBottom: '25px' }}>
          <span className={roboto.className}>{masterText}</span>
          {/*<a href="#" className={oswald.className}>
            SAIBA MAIS <MdNavigateNext size={15} />
          </a>*/}
        </div>
      </div>
    </>
  );
};

export default Content;
