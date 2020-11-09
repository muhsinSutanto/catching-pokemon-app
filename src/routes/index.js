import Home from '../pages/Home'
import MyPokemon from '../pages/MyPokemon'
import PageNotFound from '../pages/PageNotFound'
import PokemonDetail from '../pages/PokemonDetail'

const ROUTES = [
    {
      path: "/",
      exact: true,
      component: () => <Home/>
    },
    {
      path: "/my-pokemon",
      component: () => <MyPokemon/>
    },
    {
        path: "/pokemon/:id",
        component: () => <PokemonDetail/>
    }
  ];

export default ROUTES