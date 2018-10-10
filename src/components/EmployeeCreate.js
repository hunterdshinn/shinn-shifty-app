import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {
  
  onButtonPress() {
    const { name, phone, shift } = this.props

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    const { formContainer, employeeFormCardStyle, employeeFormCardSectionStyle, greenButton} = styles

    return (
      <View style={formContainer}>
        <Card style={employeeFormCardStyle}>
          <EmployeeForm {...this.props} />
          <CardSection style={employeeFormCardSectionStyle}>
            <Button
              onPress={this.onButtonPress.bind(this)}
              style={greenButton}
            >
              Add
            </Button>
          </CardSection> 
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
  }
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)