import React from "react"
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { authSelectors } from '../Redux/Selectors'

const PrivateRoute = ( {component: Component, isAuthenticated, ...routeProps} ) => (
    <Route
      {...routeProps}
      render = {props => 
        isAuthenticated 
        ? (<Component {...props} />) 
        : (<Redirect to="/auth" />)
      }
    />
)
  
const mapStateToProps = state => ({
    // isAuthenticated: authSelectors.isAuthenticated(state),
    isAuthenticated: true
  })

export default connect(mapStateToProps)(PrivateRoute)