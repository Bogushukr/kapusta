import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations } from './Redux/auth';
import { useDispatch } from 'react-redux';

// import Balance from './Components/Balance';
// import Formik from './Components/RegisterForm/RegisterForm';
import Container from './Components/Container/Container';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import AppBar from './Components/AppBar/AppBar';
import Spinner from './Components/Spinner';
// import UserLogout from './Components/UserLogout';

// import HeaderPage from './Components/HeaderPage/HeaderPage';

const LoginPage = lazy(() => import('./Pages/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {/* <HeaderPage /> */}
      {/* <UserLogout /> */}
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute
            exact
            path="/"
            restricted
            redirectTo="/home"
            component={LoginPage}
          />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/home"
            component={RegisterPage}
          />
          <PrivateRoute path="/home" redirectTo="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };
// export default connect(null, mapDispatchToProps)(App);
// export default App;
