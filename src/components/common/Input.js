import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry, 
  placeholderTextColor,
  selectionColor, 
  style 
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={[labelStyle, style]}>{label}</Text>
      <TextInput 
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        selectionColor={selectionColor}
        autoCorrect={false}
        style={[inputStyle, style]}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#000',
    fontSize: 18,
    flex: 2,
    lineHeight: 23,
    paddingRight: 5,
    paddingLeft: 5
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20
  },
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 40
  }
}

export { Input }