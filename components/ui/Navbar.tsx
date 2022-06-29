import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar: FC = () => {
  const { theme } = useTheme();

  return (
    <NextLink href="/">
      <Link>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '0.5rem 3rem',
            // backgroundColor: theme?.colors.gray900.value,
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/501.svg"
            alt="Pokemons App Logo (Oshawott)"
            width={70}
            height={70}
          />

          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>

          <Spacer
            css={{
              flex: 1,
            }}
          />

          <Text color="white">Favoritos</Text>
        </div>
      </Link>
    </NextLink>
  );
};
