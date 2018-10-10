import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { CardSection, Input } from './common'

class EmployeeForm extends Component {
  render() {
    const {
      pickerLabelStyle,
      pickerContainer,
      employeeFormInputs
    } = styles

    return (
      <View>
        <CardSection style={employeeFormInputs}>
          <Input
            style={{ color: '#1db954' }} 
            label="Name"
            placeholder="John Doe"
            placeholderTextColor='#535353'
            selectionColor='#1db954'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection> 
        <CardSection style={employeeFormInputs}>
          <Input 
            style={{ color: '#1db954' }}
            label="Phone"
            placeholder="555-555-5555"
            placeholderTextColor='#535353'
            selectionColor='#1db954'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection> 
        <CardSection style={pickerContainer}>
          <Text style={pickerLabelStyle}>
            Select a Shift
          </Text>
          <Picker
            itemStyle={{ color: '#1db954' }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection> 
      </View>
    )
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#1db954'
  },
  employeeFormInputs: {
    backgroundColor: '#212121',
    borderColor: '#535353'
  },
  pickerContainer: {
    flexDirection: 'column',
    backgroundColor: '#212121',
    borderColor: '#535353'
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)