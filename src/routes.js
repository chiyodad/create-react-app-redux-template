import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Other from './components/Other'
import Home from './components/Home'

export default <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="/other" component={Other} />
</Route>
