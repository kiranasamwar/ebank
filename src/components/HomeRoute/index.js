import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import LogoutRoute from '../LogoutRoute'

import {
  HomeMainContainer,
  HomeContainer,
  DigitalCardContainer,
  LogoAndButtonContainer,
  DigitalImg,
  WebSiteLogo,
  HeadingCard,
} from './styledComponents'

class HomeRoute extends Component {
  renderHomeMethod = () => (
    <>
      <HomeContainer>
        <LogoAndButtonContainer>
          <WebSiteLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt=" website logo"
          />
          <LogoutRoute />
        </LogoAndButtonContainer>

        <DigitalCardContainer>
          <HeadingCard>Your Flexibility, Our Excellence</HeadingCard>
          <DigitalImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
            alt="digital card"
          />
        </DigitalCardContainer>
      </HomeContainer>
    </>
  )

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <>
        <HomeMainContainer>{this.renderHomeMethod()}</HomeMainContainer>
      </>
    )
  }
}

export default HomeRoute
