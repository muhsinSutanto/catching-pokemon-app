import {TYPES} from '../../consts/actionType'

const  initialState = {
    pokemonList : {
        data: [],
        number: '',
        next:'',
        previous:''
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
        default: 
            return state
    }
}
