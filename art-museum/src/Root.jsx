import React from 'react'
import App from './App'
import {BrowserRouter} from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      {/* <Switch>
<Route path={'/'}  />

      </Switch> */}
      <App />
    </BrowserRouter>
  )
}

export default Root