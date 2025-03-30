import React from 'react';
import { Oswald } from 'next/font/google';

type PropType = {
  padding: string;
  backgroundColor: string;
  content: string;
  fontSize: string;
  border: string;
  borderRadius: string;
  color: string;
  margin: string;
};

const oswald400 = Oswald({
  subsets: ['latin'],
  weight: '400',
});

const ColorButton: React.FC<PropType> = (props) => {
  const {
    padding,
    backgroundColor,
    content,
    fontSize,
    border,
    borderRadius,
    color,
    margin = '0',
  } = props;
  return (
    <button
      className={oswald400.className}
      style={{
        width: 'fit-content',
        padding: padding,
        background: backgroundColor,
        fontSize: fontSize,
        border: border,
        borderRadius: borderRadius,
        color: color,
        margin: margin,
        cursor: 'pointer',
      }}
    >
      {content}
    </button>
  );
};

export default ColorButton;
