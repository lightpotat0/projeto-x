import React, { useEffect, useState } from 'react';
import Content from './Content';
import { CarouselContainer } from './styled';

import { StaticImageData } from 'next/image';
import { mastersDefault } from '@/utils/masters';
const OurMastersSlides = () => {
  const [masters, setMasters] = useState<
    {
      name: string;
      id: string;
      image: StaticImageData;
      subtitle: string;
      description: string;
    }[]
  >([]);
  async function fetchUsers() {
    setMasters(mastersDefault);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {masters.map((master) => (
        <CarouselContainer key={master.id}>
          <Content
            masterName={master.name}
            masterSubtitle={master.subtitle}
            masterText={master.description}
            imageSrc={master.image.src}
          />
        </CarouselContainer>
      ))}
    </>
  );
};

export default OurMastersSlides;
