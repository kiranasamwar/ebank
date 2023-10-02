import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect, Link} from 'react-router-dom'

import {
  LoginFormMainContainer,
  ImageContainer,
  FormContainer,
  FormDetails,
  Paragraph,
  Input,
  LoginButton,
  Label,
  Form,
  LoginImage,
  Heading,
  InputAndLabelContainer,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    userId: '',
    pin: '',
    se: false,
    em: '',
  }

  one = event => {
    this.setState({
      userId: event.target.value,
    })
  }

  two = event => {
    this.setState({
      pin: event.target.value,
    })
  }

  success = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 600,
      path: '/',
    })

    history.replace('/')
  }

  fail = em => {
    this.setState({
      se: true,
      em,
    })
  }

  BankLogin = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success(data.jwt_token)
    } else {
      this.fail(data.error_msg)
    }
  }

  render() {
    const {userId, pin, se, em} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginFormMainContainer>
        <FormDetails>
          <ImageContainer>
            <Link to="/">
              <LoginImage
                src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
                alt=" website login"
              />
            </Link>
          </ImageContainer>
          <FormContainer>
            <Form onSubmit={this.BankLogin}>
              <Heading>Welcome Back!</Heading>
              <InputAndLabelContainer>
                <Label htmlFor="user">User ID</Label>
                <Input
                  id="user"
                  placeholder="Enter User ID"
                  className="inp"
                  type="text"
                  value={userId}
                  onChange={this.one}
                />
              </InputAndLabelContainer>
              <InputAndLabelContainer>
                <Label htmlFor="pin">PIN</Label>
                <Input
                  placeholder="Enter Pin"
                  id="pin"
                  className="inp"
                  type="password"
                  value={pin}
                  onChange={this.two}
                />
              </InputAndLabelContainer>
              <LoginButton type="submit">Login</LoginButton>
              {se === true && <Paragraph className="ep"> {em} </Paragraph>}
            </Form>
          </FormContainer>
        </FormDetails>
      </LoginFormMainContainer>
    )
  }
}

export default LoginRoute
