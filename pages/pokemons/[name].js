import { useRouter } from "next/router";

export default function Pokemon({
  abilities,
  base_experience,
  height,
  weight,
}) {
  const router = useRouter();
  const { name } = router.query;
 
  return (
    <div>
      <h1>{name} pokemon</h1>
      <h2>Pokemon Abilities</h2>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>

      <h2>Pokemon Base Experience</h2>
      <p>{base_experience}</p>
      <h2>Pokemon Height</h2>
      <p>{height}</p>
      <h2>Pokemon Weight</h2>

      <p>{weight}</p>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  // Fetch data from external API
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ctx.query.name}`
  );
  const pokemon = await res.json();

  // Pass data to the page via props
  return {
    props: {
      abilities: pokemon.abilities,
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
    },
  };
}
