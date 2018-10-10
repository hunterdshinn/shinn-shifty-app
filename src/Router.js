import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.titleStyle}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Log In" initial />        
        </Scene>
        <Scene key="main">
          <Scene 
            rightTitle="Add"
            rightButtonTextStyle={styles.titleStyle}
            onRight={() => Actions.employeeCreate()}
            key="employeeList" 
            component={EmployeeList} 
            title="Employees"
            initial 
          />
          <Scene 
            key="employeeCreate" 
            component={EmployeeCreate} 
            title="Add Employee"
            leftTitle="Employees"
            leftButtonTextStyle={styles.titleStyle}
            onLeft={() => Actions.pop()}
          /> 
          <Scene 
            key="employeeEdit" 
            component={EmployeeEdit} 
            title="Edit Employee" 
            leftTitle="Employees"
            leftButtonTextStyle={styles.titleStyle}
            onLeft={() => Actions.pop()}
          />
        </Scene>
      </Scene>
    </Router>
  )
}

const styles = {
  navBar: {
    backgroundColor: '#535353',
    borderBottomColor: '#535353'
  },
  titleStyle: {
    color: '#1db954'
  }
}

export default RouterComponent