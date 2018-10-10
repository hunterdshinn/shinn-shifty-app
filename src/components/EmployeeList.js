import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { ListView, View } from 'react-native'
import { employeesFetch } from '../actions/EmployeeActions'
import ListItem from './ListItem'

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <View style={styles.employeeListContainer}>
        <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })

  return { employees }
}

const styles = {
  employeeListContainer: {
    backgroundColor: '#212121',
    flex: 1,
    flexDirection: 'column',
  }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)