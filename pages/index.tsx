import { Grid } from '@nextui-org/react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import { pokeApi } from '../api';
import { PokemonListResponse, PokemonResult } from '../interfaces';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import Link from 'next/link';

interface Props {
  pokemons: PokemonResult[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Home">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const results = data.results;
  const pokemons: PokemonResult[] = results.map((pokemon: PokemonResult, i) => {
    return {
      ...pokemon,
      id: i + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
