import React, { Component } from 'react';

class Datos extends Component {

    render() {
        const pokemon = this.props.pokemon;

        return (
            <div>
                <ul>
                    <li><img src={pokemon.sprites.front_default} alt={pokemon.name} /></li>
                    <li><h1>{pokemon.name}</h1></li>
                    <li>Número: {pokemon.id}</li>
                    {pokemon.stats.map(function(elem, key) {
                        return <li key={elem.stat.name}>{elem.stat.name}: {elem.base_stat}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Datos
