import axios from 'axios'
import { TYPES } from '../../consts/actionType'
import { ENV } from '../../consts/env'

const fetchPokemonList = () => (dispatch) => {
    axios.get(`${ENV.BASE_URL}pokemon`)
        .then((res) => {
            // console.log('data', res.data);
            dispatch({
                type: TYPES.GET_POKEMON_LIST,
                payload: res.data
            })
        })
        .catch(err => console.log('err', err))
}

const fetPokemonDetail = (id) => (dispatch) => {
    axios.get(`${ENV.BASE_URL}pokemon/${id}`)
        .then((res) =>{
            console.log('data', res)
            dispatch({
                type: TYPES.GET_POKEMON_DETAIL,
                payload: res.data
            })
        })
        .catch(err => console.log(err)) 
}

export {
    fetchPokemonList,
    fetPokemonDetail
}