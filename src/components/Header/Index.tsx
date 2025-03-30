import { useRouter } from 'next/router';
import { IoIosSearch } from 'react-icons/io';
import { ImUser } from 'react-icons/im';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { HiMiniChatBubbleLeftRight } from 'react-icons/hi2';
import {
  BottomBar,
  Button,
  Container,
  IconContainer,
  NavIcons,
  SearchBar,
} from './styled';
import Image from 'next/image';
import { Inter, Oswald } from 'next/font/google';
import { useMediaQuery } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { MdWhatsapp } from 'react-icons/md';
import { AuthContext } from '@/context/AuthContext';
import { FaPlus } from 'react-icons/fa';
import { enviarParaWhatsApp } from '@/utils/whatsapp';

const inter = Inter({
  subsets: ['latin'],
});

const oswald = Oswald({ subsets: ['latin'] });

export const Header = () => {
  const router = useRouter();
  const { isAuthenticated, logoutUser, user } = useContext(AuthContext);

  const mobile = useMediaQuery('(max-width: 768px)');
  const [scrolled, setScrolled] = useState(false);
  const inProductRoute = router.pathname.includes('user');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container
      className={inter.className}
      style={
        scrolled && mobile
          ? { position: 'fixed', height: 'fit-content', minHeight: '120px' }
          : {}
      }
    >
      <IconContainer style={scrolled && mobile ? { marginBottom: '0' } : {}}>
        <button
          type="button"
          onClick={() => router.push('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '2rem',
            marginTop: '2rem',
          }}
        >
          <Image src="/img/Logo.svg" alt="Axarca Logo" fill priority />
        </button>
      </IconContainer>
      {/*<SearchBar style={scrolled && mobile ? { display: 'none' } : {}}>
        <div className="search">
          <input
            type="text"
            name="search"
            id="search"
            className="searchBar"
            placeholder="  Busque aqui seu produto..."
          />
          <button type="submit" className="submitButton">
            <IoIosSearch size={30} />
          </button>
        </div>
      </SearchBar>*/}

      <BottomBar>
        <ul style={{ marginBottom: '0' }}>
          <li className={oswald.className}>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="bottomBarButton"
            >
              HOME
            </button>
          </li>
          <li className={oswald.className}>
            <button
              type="button"
              onClick={() => router.push('/about-us')}
              className="bottomBarButton"
            >
              SOBRE AXARCA
            </button>
          </li>
          <li className={oswald.className}>
            <button
              type="button"
              onClick={() => router.push('/#ourMasters')}
              className="bottomBarButton"
            >
              NOSSOS MESTRES
            </button>
          </li>
          <li className={oswald.className}>
            <button
              type="button"
              onClick={() => router.push('/products')}
              className="bottomBarButton"
            >
              PRODUTOS
            </button>
          </li>
          {/*
          <li className={oswald.className}>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="bottomBarButton"
            >
              NOVIDADES
            </button>
          </li>
          <li className={oswald.className}>
            <button
              type="button"
              onClick={() => router.push('/')}
              className="bottomBarButton"
            >
              PROMO
            </button>
          </li>
          */}
          <li className={oswald.className}>
            <button
              type="button"
              onClick={() => router.push('/#Footer')}
              className="bottomBarButton"
            >
              CONTATO
            </button>
          </li>
        </ul>
      </BottomBar>
      {inProductRoute ? (
        <></>
      ) : (
        <MdWhatsapp
          className="wpp"
          size={30}
          onClick={enviarParaWhatsApp}
          style={{ cursor: 'pointer' }}
        />
      )}
      {inProductRoute ? (
        <NavIcons style={{ width: '200px', display: 'flex' }}>
          <Button onClick={() => router.push('/user/product')}>
            <FaPlus size={12} /> Novo Produto
          </Button>
          {/*<Button
            onClick={() => {
              router.push('/');
              logoutUser();
            }}
          >
            <MdLogout size={12} /> Sair
          </Button>
          <Image
            src={user.avatarUrl ?? ''}
            alt="Avatar Usuario"
            width={'0'}
            height={'0'}
            className="avatar"
          />*/}
        </NavIcons>
      ) : (
        <>
          {/*<NavIcons style={scrolled && mobile ? { marginBottom: '0' } : {}}>
            <div className="iconDiv">
              {mobile ? (
                <>
                  {scrolled ? (
                    <>
                      <div className="categoriesButton">
                        <NavSearch />
                      </div>
                    </>
                  ) : (
                    <>
                      {' '}
                      <button
                        type="button"
                        className="icon"
                        onClick={() => router.push('/')}
                        id="shoppingCart"
                      >
                        <MdShoppingBag size={40} />
                      </button>
                    </>
                  )}
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="icon"
                    onClick={() => router.push('/user')}
                    id="login"
                  >
                    <ImUser size={40} />
                  </button>
                  <label htmlFor="login">Minha conta</label>
                </>
              )}
            </div>
            <div className="iconDiv2">
              <button
                type="button"
                className="icon"
                onClick={() => router.push('/')}
                id="service"
              >
                <HiMiniChatBubbleLeftRight size={40} />
              </button>
              <label htmlFor="service">Atendimento</label>
            </div>

            <div className="iconDiv">
              {mobile ? (
                <>
                  <div className="categoriesButton">
                    <NavButton />
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="icon"
                    onClick={() => router.push('/cart')}
                    id="shoppingCart"
                  >
                    <PiShoppingCartSimpleFill size={40} />
                  </button>
                  <label htmlFor="shoppingCart">Meu carrinho</label>
                </>
              )}
            </div>
          </NavIcons>*/}
        </>
      )}
    </Container>
  );
};
