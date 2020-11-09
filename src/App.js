import './App.less';
import { Button } from 'antd';
import Home from './pages/Home';
import ROUTES from './routes'
import { Route, BrowserRouter } from 'react-router-dom';

function App() {

  const routePages = ROUTES.map(({ path, component, key }) => <Route exact path={path} component={component} key={key} />)

  return (
    <BrowserRouter>
      {routePages}
    </BrowserRouter>
  );
}

export default App;
