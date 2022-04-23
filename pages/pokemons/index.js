

export default function Pokemons({pokemon}) {

    return (
      <div >
        <h1>Enter pokemon name</h1>
      </div>
    )
  }
  
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const pokemon = await res.json()
  
    // Pass data to the page via props
    return { props: {pokemon:pokemon.results.slice(0,20) } }
  }
  
 