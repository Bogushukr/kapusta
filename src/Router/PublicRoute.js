import React from "react"
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { authSelectors } from '../Redux/Selectors'

const PublicRoute = ( {component: Component, isAuthenticated, ...routeProps}) => (
    <Route
      {...routeProps}
      render = {props => 
        isAuthenticated
        ? (<Redirect to="/" />) 
        : (<Component {...props} />)
      }
    />
)
  
const mapStateToProps = state => ({
    // isAuthenticated: authSelectors.isAuthenticated(state),
    isAuthenticated: false
  })

export default connect(mapStateToProps)(PublicRoute)