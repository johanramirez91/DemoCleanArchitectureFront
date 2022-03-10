/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../layout/Footer'
import Navbar from '../layout/navbar'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import NotFoundPage from '../pages/NotFound'

const App = () => {
  return (
      <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/dashboard'} component={Dashboard}/>
        <Route path={'*'} component={NotFoundPage}/>
      </Switch>
      <Footer />
      </Router>
      </>
  )
}

export default App
