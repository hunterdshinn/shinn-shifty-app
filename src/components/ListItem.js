import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee })
  }

  render() {
    const { name } = this.props.employee

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={styles.containerStyle}>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#212121',
    borderColor: '#535353'
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#1db954'
  }
}

export default ListItem