import React, { Component, Suspense } from 'react';
import Balance from './Components/Balance';
import Container from './Components/Container/Container';
import HeaderPage from './Components/HeaderPage/HeaderPage';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  render() {
    return (
      <Container>
        <HeaderPage />

        <Suspense fallback={<p>Загружаем...</p>}>
          {/* <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
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
            />
          </Switch> */}
        </Suspense>
        <Balance />
      </Container>
    );
  }
}

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };
// export default connect(null, mapDispatchToProps)(App);
export default App;
