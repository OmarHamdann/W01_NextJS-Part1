import Link from 'next/link'
export const getServerSideProps=async  ()=> {
  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const pokemons = await res.json();
  // Pass data to the page via props
  return { props: { pokemons: pokemons.results} };
}

export default function Pokemons({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <Link href="/pokemons/[name]" as={`/pokemons/${pokemon.name}`}>
            <a>{pokemon.name}</a>
          </Link>
          
        </div>
      ))}
    </div>
  );
}

