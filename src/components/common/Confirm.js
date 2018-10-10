import React from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { 
    cardSectionStyle, 
    textStyle, 
    containerStyle,
    buttonContainerStyle,
    greenButton,
    redButton 
  } = styles

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>
        <CardSection style={buttonContainerStyle}>
          <Button onPress={onAccept} style={greenButton}>Yes</Button>
          <Button onPress={onDecline} style={redButton}>No</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
    backgroundColor: '#212121',
    borderColor: '#212121'
  },
  textStyle: {
    color: '#1db954',
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    flex: 1,
    justifyContent: 'center',
    position: 'relative'
  },
  buttonContainerStyle: {
    backgroundColor: '#212121', 
    borderColor: '#212121',
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

export { Confirm }