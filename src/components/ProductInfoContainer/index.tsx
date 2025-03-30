import { useState } from 'react';
import { GridContainer, GridItem, TextContent, Typography } from './styled';

interface InfoProductProps {
  textDescription?: React.ReactNode;
  textAddInformation?: React.ReactNode;
}

export const ProductInfoContainer = ({
  textAddInformation,
  textDescription,
}: InfoProductProps) => {
  const [activeOption, setActiveOption] = useState('Description');

  return (
    <GridContainer>
      <GridItem>
        <Typography
          onClick={() => setActiveOption('Description')}
          active={activeOption === 'Description'}
        >
          Detalhes
        </Typography>
        <Typography
          onClick={() => setActiveOption('Additional Information')}
          active={activeOption === 'Additional Information'}
        >
          Mais Informações
        </Typography>
      </GridItem>
      <TextContent>
        {activeOption === 'Description' && textDescription}
        {activeOption === 'Additional Information' && textAddInformation}
      </TextContent>
    </GridContainer>
  );
};
