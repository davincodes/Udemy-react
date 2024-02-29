import './css/style.css'
function RandomPokemon(){
        
    const randomNum = Math.floor((Math.random() * 151)) + 1;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`
    
    return(
    <>
    <div className="pokemon">
        <div className="nameandimage">
            <h1>POKEMON # {randomNum}</h1>
            <img className="poke-image" src={imgUrl}/>
        </div>
    </div>
    </>
)}
export default RandomPokemon;