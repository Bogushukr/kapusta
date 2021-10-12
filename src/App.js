import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom'
import { authOperations } from './Redux/auth';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
// import Balance from './Components/Balance';
// import Formik from './Components/RegisterForm/RegisterForm';
import Container from './Components/Container/Container';
import PrivateRoute from './Router/PrivateRoute';
import PublicRoute from './Router/PublicRoute';
import AppBar from './Components/AppBar/AppBar';
import Spinner from './Components/Spinner';
// import HeaderPage from './Components/HeaderPage/HeaderPage';
// import routes from './Router/routes'

const LoginPage = lazy(() => import('./Pages/LoginPage'));
const RegisterPage = lazy(() => import('./Pages/RegisterPage'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const ReportPage = lazy(() => import('./Pages/ReportPage'));


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {/* <HeaderPage /> */}
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
          <PublicRoute
            exact
            path="/report"
            restricted
            redirectTo="/"
            component={ReportPage}
          />
        </Switch>
      </Suspense>
    </Container>
  );
};


// eslint-disable-next-line
export default App

// const mapDispatchToProps = {onGetCurrentUser: authOperations.getCurrentUser,};
// export default connect(null, mapDispatchToProps)(App);


