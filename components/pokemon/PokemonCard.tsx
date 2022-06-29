import { FC } from 'react';
import { useRouter } from 'next/router';

import { Card, Grid, Row, Text } from '@nextui-org/react';

import { PokemonResult } from '../../interfaces';

interface Props {
  pokemon: PokemonResult;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={3} xl={1} key={pokemon.id}>
      <Card isHoverable isPressable onPress={onClick}>
        <Card.Body
          css={{
            padding: '1rem',
          }}
        >
          <Card.Image
            src={pokemon.image}
            alt={`Imagen de ${pokemon.name}`}
            width={'100%'}
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
