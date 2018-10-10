import React, { Component } from 'react'
import { View } from 'react-native'
import _ from 'lodash'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'

class EmployeeEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props
    
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress() {
    const { phone, shift } = this.props

    Communications.text(phone, `Your upcoming shift is on ${shift}` )
  }

  onAccept() {
    const { uid } = this.props.employee

    this.props.employeeDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    const { 
      formContainer, 
      employeeFormCardStyle, 
      employeeFormCardSectionStyle,
      greenButton,
      redButton 
    } = styles

    return (
      <View style={formContainer}>
        <Card style={employeeFormCardStyle}>
          <EmployeeForm />
          <CardSection style={employeeFormCardSectionStyle}>
            <Button 
              onPress={this.onButtonPress.bind(this)}
              style={greenButton}
            >
              Save Changes
            </Button>
          </CardSection>
          <CardSection style={employeeFormCardSectionStyle}>
            <Button 
              onPress={this.onTextPress.bind(this)}
              style={greenButton}
            >
              Text Schedule
            </Button>
          </CardSection>
          <CardSection style={employeeFormCardSectionStyle}>
            <Button 
              onPress={() => this.setState({ showModal: !this.state.showModal })}
              style={redButton}
            >
              Delete
            </Button>
          </CardSection>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

const styles = {
  formContainer: {
    backgroundColor: '#212121',
    flex: 1,
    flexDirection: 'column',
  },
  employeeFormCardStyle: {
    borderBottomWidth: 1,
    borderColor: '#212121'
  },
  employeeFormCardSectionStyle: {
    backgroundColor: '#212121',
    borderColor: '#212121' 
  },
  greenButton: {
    color: '#212121', 
    backgroundColor: '#1db954', 
    borderColor: '#1db954'
  },
  redButton: {
    color: '#212121', 
    backgroundColor: '#BE2625', 
    borderColor: '#BE2625'
  }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit)