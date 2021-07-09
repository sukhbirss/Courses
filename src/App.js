import './App.css';
import Home from './page/Home'
import { Route,Switch,useHistory } from 'react-router-dom'
import Detail from './page/detail/Detail'

const Routing = ()=>{
  return(
        <Switch>
          <Route exact path="/:id" component={Home}/>
          <Route exact path="/detail/:id" component={Detail}/>
      	</Switch>
  )
}

function App() {
  return (
        <Routing />
  );
}

export default App;
