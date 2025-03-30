import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { EmblaCarouselType } from 'embla-carousel';
type UseDotButtonType = {
  selectedIndexP: number;
  scrollSnapsP: number[];
  onDotButtonClickP: (index: number) => void;
};

export const useDotButtonProducts = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndexP, setSelectedIndexP] = useState(0);
  const [scrollSnapsP, setScrollSnapsP] = useState<number[]>([]);

  const onDotButtonClickP = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInitP = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnapsP(emblaApi.scrollSnapList());
  }, []);

  const onSelectP = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndexP(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInitP(emblaApi);
    onSelectP(emblaApi);
    emblaApi.on('reInit', onInitP);
    emblaApi.on('reInit', onSelectP);
    emblaApi.on('select', onSelectP);
  }, [emblaApi, onInitP, onSelectP]);

  return {
    selectedIndexP,
    scrollSnapsP,
    onDotButtonClickP,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButtonProducts: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
