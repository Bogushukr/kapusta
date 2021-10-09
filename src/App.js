import React, { Component, Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'

// import Balance from './Components/Balance'
// import Container from './Components/Container/Container'
// import HeaderPage from './Components/HeaderPage/HeaderPage'
// import Formik from './Components/RegisterForm/RegisterForm'
import PublicRoute from './Router/PublicRoute'
import PrivateRoute from './Router/PrivateRoute'
import routes from './Router/routes'

class App extends Component{

  // componentDidMount() {this.props.onGetCurrentUser();}

  render() {
    return (
      <BrowserRouter>
        {/* <Container> */}
          {/* <HeaderPage /> */}
          {/* <Formik onSubmit={data => console.log(data)} /> */}
          <Suspense fallback={<p>Загружаем...</p>}>
            <Switch>
              {/* <PublicRoute exact path="/" component={StatisticsPage} /> */}
              {routes.map(
                route => route.private
                  ? <PrivateRoute key={route.label} {...route} />
                  : <PublicRoute key={route.label} {...route} />
              )}
            </Switch>
          </Suspense>
          {/* <Balance /> */}
        {/* </Container> */}
      </BrowserRouter>
    )
  }
}

// const mapDispatchToProps = {onGetCurrentUser: authOperations.getCurrentUser,};
// export default connect(null, mapDispatchToProps)(App);

// eslint-disable-next-line
export default App
