import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {LogoutButton} from './styledComponents'

const LogoutRoute = props => {
  const remove = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return <LogoutButton onClick={remove}>Logout</LogoutButton>
}

export default withRouter(LogoutRoute)
