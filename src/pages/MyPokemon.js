import React, { useEffect } from 'react';
import Layout from '../template/Layout'
import { useSelector, useDispatch } from "react-redux";
import { fetchMyPokemon } from '../store/actions/pokemonAction';

const MyPokemon = () => {

    const dispatch = useDispatch();
    const myPokemons = useSelector((state) => state.myPokemons);

    useEffect(() => {
        dispatch(fetchMyPokemon())
    }, [])

    console.log(myPokemons)
    return (<Layout>
        <h1>hai my pokemon</h1>
    </Layout>);
}

export default MyPokemon;