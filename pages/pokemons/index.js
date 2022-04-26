//////pulse check


////question 1

//when I need many render on the page I use CSR to avoid stress on the server but on the static page, I use SSR.



////question 2

//Complex games web application ====> CSR to avoid stress on the server because I need many renders.
//Newsletter website ======> SSR it s a static page I render it little time so I use SSR.
//Documentations website ======> SSR it s a static page I render it little time so I use SSR.





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

