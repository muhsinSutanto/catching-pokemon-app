import Home from '../pages/Home'
import MyPokemon from '../pages/MyPokemon'
import PageNotFound from '../pages/PageNotFound'
import PokemonDetail from '../pages/PokemonDetail'

const ROUTES = [
    {
        path: "/",
        exact: true,
        component: () => <Home />
    },
    {
        path: "/my-pokemon",
        exact: true,
        component: () => <MyPokemon />
    },
    {
        path: "/pokemon/:id",
        exact: true,
        component: () => <PokemonDetail />
    }
    // {
    //     exact: false,
    //     component: () => <PageNotFound />
    // }
];

export default ROUTES