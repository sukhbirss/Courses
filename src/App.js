import './App.css';
import Home from './page/Home'
import { Route,Switch,useHistory } from 'react-router-dom'
import Detail from './page/detail/Detail'
import Welcome from './page/welcome/Welcome'


function App() {
  return (
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/:id" component={Home}/>
          <Route exact path="/detail/:id" component={Detail}/>
      	</Switch>
  );
}

export default App;
