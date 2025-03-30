import { Oswald } from 'next/font/google';
import { Container, IconContainer, MidContent } from './styled';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaChevronRight } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import Image from 'next/image';
import background from '../../config/img/Intersect.svg';

const oswald = Oswald({
  subsets: ['latin'],
});
export const Footer = () => {
  return (
    <Container
      className={oswald.className}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      id="Footer"
    >
      <IconContainer>
        <Image
          src="/img/Logo.svg"
          alt="Axarca Logo"
          height={100}
          width={100}
          priority
          style={{ height: '100%', width: '100%' }}
        />
        <div className="subText">
          <p>Estamos aqui por voce</p>
        </div>
      </IconContainer>
      <MidContent>
        <div className="knowMore">
          <p>SAIBA MAIS</p>
          <FaChevronRight size={20} />
        </div>
        <div className="adress">
          <p>
            Rua Interventor, R. Interventor Francisco Erivano Cruz, 120
            63011-085 Centro, Juazeiro do Norte - CE, 63011-085
          </p>
        </div>
        <div className="axarcaMark">
          <FaRegCopyright size={20} />
          <p>AXARCA- ASSOCIAÇÃO DOS XILOGRAFOS E ARTESÃOS DO CARIRI</p>
        </div>
      </MidContent>
      <div className="footerIcons">
        <a href="#">
          <FaFacebook size={40} className="icon" />
        </a>
        <a href="#" className="icon">
          <AiFillInstagram size={40} />
        </a>
        <a href="#" className="icon">
          <IoLogoWhatsapp size={40} />
        </a>
      </div>
    </Container>
  );
};
