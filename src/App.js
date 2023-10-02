import {Route, Switch} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'

import LoginRoute from './components/LoginRoute'

import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={LoginRoute} />
      <Route exact path="/" component={HomeRoute} />
      <NotFound />
    </Switch>
  </>
)

export default App
