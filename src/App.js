import React, { Component, Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'

// import Balance from './Components/Balance'
// import Container from './Components/Container/Container'
import HeaderPage from './Components/HeaderPage/HeaderPage'
import Formik from './Components/RegisterForm/RegisterForm'
// import StatisticsPage from './Pages/StatisticsPage/StatisticsPage'
// import PublicRoute from './Router/PublicRoute'

class App extends Component{

  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  render() {
    return (
      <BrowserRouter>
        {/* <Container> */}
          <HeaderPage />
          {/* <Formik onSubmit={data => console.log(data)} /> */}
          {/* <Suspense fallback={<p>Загружаем...</p>}> */}
            {/* <Switch> */}
              {/* <PublicRoute exact path="/" component={StatisticsPage} /> */}
              {/* <PublicRoute
                path="/register"
                restricted
                redirectTo="/todos"
                component={RegisterView}
              />
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/todos"
                component={LoginView}
              />
              <PrivateRoute
                path="/todos"
                redirectTo="/login"
                component={TodosView}
              /> */}
            {/* </Switch> */}
          {/* </Suspense> */}
          {/* <Balance /> */}
        {/* </Container> */}
      </BrowserRouter>
    )
  }
}

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// const mapDispatchToProps = {
//   onGetCurrentUser: true,
// };

// export default connect(null, mapDispatchToProps)(App);
// eslint-disable-next-line
export default App
