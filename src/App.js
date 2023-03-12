import './App.css'
import {Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    {/* <Route exact path="/bad-path" component={NotFound} /> */}
    {/* <Redirect to="/bad-path" /> */}
  </Switch>
)

export default App
