import React, { Component } from 'react'
import { connect } from 'react-redux'
import { redirectAuth, processAuth } from '../actions'
import { UserManager, Log, WebStorageStateStore } from 'oidc-client'
import Login from '../components/Login.jsx'

Log.logger = console

let manager

class LoginContainer extends Component {
  constructor(props) {
      super(props)
  }

  componentDidMount() {
    console.log(localStorage)
    manager = new UserManager({
      authority: 'https://192.168.99.100:8443/auth/realms/hmda',
      client_id: 'hmda-api',
      redirect_uri: 'http://192.168.99.100',
      scope: 'openid profile email',
      response_type: 'id_token token',
      store: new WebStorageStateStore({store: localStorage})
    })
    window.manager = manager
    this.props.getAuthTokens()
  }

  render() {
    return <Login {...this.props} />
  }
}

function mapStateToProps(state) {
  const {
    user
  } = state.app.auth || {
    user: null
  }

  return {
    user
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    redirect(){
      dispatch(redirectAuth(manager))
    },
    getAuthTokens() {
      dispatch(processAuth(manager, ownProps.router))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
