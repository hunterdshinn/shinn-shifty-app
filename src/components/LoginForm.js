import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
  
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: '#212121' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
      <Button 
        onPress={this.onButtonPress.bind(this)} 
        style={{ color: '#212121', backgroundColor: '#1db954', borderColor: '#1db954' }}
      >
        Log In
      </Button>
    )
  }

  render() {
    const { 
      loginFormContainer, 
      loginFormTitle, 
      loginFormLogo, 
      logoContainer,
      loginFormInputs,
      loginCardStyle
    } = styles

    return (
      <View style={loginFormContainer}>
        <View style={logoContainer}>
          <Image source={require('../images/logo.png')} style={loginFormLogo}/>
          <Text style={loginFormTitle}>shifty</Text>
        </View>
        <Card style={loginCardStyle}> 
          <CardSection style={loginFormInputs}>
            <Input 
              style={{ color: '#1db954' }}
              label="Email"
              placeholder="email@email.com"
              placeholderTextColor='#535353'
              selectionColor='#1db954'
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection style={loginFormInputs}>
            <Input
              style={{ color: '#1db954' }} 
              secureTextEntry
              label="Password"
              placeholder="password"
              placeholderTextColor='#535353'
              selectionColor='#1db954'
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
            {this.renderError()}
          <CardSection style={{ backgroundColor: '#212121', borderColor: '#212121' }}>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  loginFormContainer: {
    backgroundColor: '#212121',
    flex: 1,
    flexDirection: 'column',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 30,
  },
  loginFormTitle: {
    alignSelf: 'center',
    color: '#1db954',
    fontSize: 50,
    fontWeight: '300',
    paddingLeft: 15
  },
  loginFormLogo: {
    height: 100,
    width: 100
  },
  loginFormInputs: {
    backgroundColor: '#212121',
    borderColor: '#535353'
  },
  loginCardStyle: {
    borderBottomWidth: 1,
    borderColor: '#212121'
  },
  errorTextStyle: {
    alignSelf: 'center',
    color: '#BE2625',
    padding: 15,
    fontSize: 20
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  
  return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)