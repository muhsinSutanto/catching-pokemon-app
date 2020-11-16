import {TYPES} from '../../consts/actionType'

const  initialState = {
    pokemonList : {
        data: [],
        number: '',
        next:'',
        previous:''
    },
    pokemonDetail: {
        moves: [],
        types: [],
        image: ''
    }
}

export default function(state = initialState, action){
    switch(action.type){
        case TYPES.GET_POKEMON_LIST : 
            return {
                ...state,
                pokemonList: {
                    data: action.payload.results,
                    number: action.payload.count,
                    next: action.payload.next,
                    previous: action.payload.previous
                }
                
            }
        case TYPES.GET_POKEMON_DETAIL: 
            return{
                ...state,
                pokemonDetail: {
                    moves: action.payload.moves,
                    types: action.payload.types,
                    image: action.payload.sprites.front_default
                }
            }
        default: 
            return state
    }
}
