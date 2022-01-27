import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split('/')
    .filter((x) => x)
    .pop();
  return (
    <li>
      <Link href={`/pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemones({ pokemones }) {
  return (
    <div className={styles.container}>
      <p>Mi app de Pokemones</p>
      <ul>
        {pokemones.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return {
    props: { pokemones: data.results },
  };
};
