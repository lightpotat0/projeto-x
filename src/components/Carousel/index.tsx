import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselSlider } from './styled';
import OurMastersSlides from './OurMasters/OurMastersSlides';
import XiloHistorySlides from './XiloHistory/XiloHistorySlides';
import { DotButton, useDotButton } from './XiloHistory/DotButton';
import ColorButton from '../Buttons/ColorButton';
import { theme } from '@/styles/theme';
import OurMastersMobile from './OurMasters/OurMastersMobile';
import { useMediaQuery } from '@mui/material';
import Products from './Products';

type PropType = {
  slideType: string;
  options?: EmblaOptionsType;
  bestSeller?: boolean;
  actionPrevButton?: number;
  actionNextButton?: number;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slideType, options, bestSeller, actionPrevButton, actionNextButton } =
    props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [carouselStyle, setCarouselStyle] = useState({});
  const [buttonSize1, setButtonSize1] = useState('7px 63px');
  const [buttonSize2, setButtonSize2] = useState('10px 70px');
  const [fontSize, setFontSize] = useState('20px');
  const mobile = useMediaQuery('(max-width: 768px)');
  const w301 = useMediaQuery('(max-width: 301px)');

  const { selectedIndex, scrollSnaps, onDotButtonClick, lineBg } = useDotButton(
    emblaApi,
    true,
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    scrollPrev();
  }, [actionPrevButton]);

  useEffect(() => {
    scrollNext();
  }, [actionNextButton]);

  useEffect(() => {
    if (w301) {
      setButtonSize1('4px 18px');
      setButtonSize2('7px 25px');
      setFontSize('15 px');
      return;
    }
    if (mobile) {
      setCarouselStyle({
        display: 'flex',
        flexDirection: 'row',
      });

      setButtonSize1('7px 33px');
      setButtonSize2('10px 40px');
      setFontSize('15px');
      return;
    } else {
      setCarouselStyle({});
      setButtonSize1('7px 63px');
      setButtonSize2('10px 70px');
      setFontSize('20px');
    }
  }, [w301, mobile]);

  return (
    <>
      {slideType === 'ourMastersSlide' ? (
        <CarouselSlider ref={emblaRef}>
          <div className="ourMastersCarousel">
            <OurMastersSlides />
          </div>
        </CarouselSlider>
      ) : null}
      {slideType === 'ourMastersMobile' ? (
        <CarouselSlider ref={emblaRef}>
          <div className="ourMastersMobileCarousel">
            <OurMastersMobile />
          </div>
        </CarouselSlider>
      ) : null}
      {slideType === 'xiloHistorySlide' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <CarouselSlider ref={emblaRef} style={carouselStyle}>
            <div className="xiloHistoryCarousel">
              <XiloHistorySlides />
            </div>
            <div className="xiloHistory__dots">
              <div className="line" style={{ background: lineBg }} />
              {scrollSnaps.map((_, index) => (
                <DotButton
                  id={index.toString()}
                  key={index}
                  onClick={() => {
                    onDotButtonClick(index);
                  }}
                  className={'xiloHistory__dot'
                    .concat(
                      index === selectedIndex
                        ? ' xiloHistory__dot--selected'
                        : '',
                    )
                    .concat(
                      index < selectedIndex
                        ? ` backOrange ${selectedIndex}`
                        : '',
                    )}
                />
              ))}
            </div>
          </CarouselSlider>
          <div style={{ display: 'flex' }}>
            {selectedIndex - 1 < 0 ? (
              <></>
            ) : (
              <>
                <div
                  onClick={() => {
                    onDotButtonClick(selectedIndex - 1);
                  }}
                >
                  <ColorButton
                    padding={buttonSize1}
                    backgroundColor={theme.colors.white}
                    content="Anterior"
                    fontSize={fontSize}
                    borderRadius="6px"
                    border="3px solid rgba(232, 113, 46, 1)"
                    color={theme.colors.secondary}
                    margin="0 3rem 0 0"
                  />
                </div>
              </>
            )}
            {selectedIndex + 1 > 5 ? (
              <></>
            ) : (
              <>
                <div
                  onClick={() => {
                    onDotButtonClick(selectedIndex + 1);
                  }}
                >
                  <ColorButton
                    padding={buttonSize2}
                    backgroundColor={theme.colors.secondary}
                    content="Próximo"
                    fontSize={fontSize}
                    borderRadius="6px"
                    border="none"
                    color={theme.colors.white}
                    margin="0"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}

      {slideType === 'productsCarousel' ? (
        <>
          <div
            style={{ display: 'flex', height: 'fit-content', width: '100%' }}
          >
            <CarouselSlider ref={emblaRef}>
              <div className="productsCarousel">
                <Products bestSeller={bestSeller ? true : false} />
              </div>
              {mobile ? (
                <>
                  <div className="products__dots">
                    {scrollSnaps.map((_, index) => (
                      <DotButton
                        id={index.toString()}
                        key={index}
                        onClick={() => {
                          onDotButtonClick(index);
                        }}
                        className={'products__dot'.concat(
                          index === selectedIndex
                            ? ' products__dot--selected'
                            : '',
                        )}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
            </CarouselSlider>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Carousel;
