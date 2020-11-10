import './App.less';
import ROUTES from './routes'
import { Route, BrowserRouter } from 'react-router-dom';

function App() {

  const routePages = ROUTES.map(({ path, component, exact, key }) => <Route exact={exact} path={path} component={component} key={key} />)

  return (
    <BrowserRouter>
      {routePages}
    </BrowserRouter>
  );
}

export default App;
