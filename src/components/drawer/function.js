import React from 'react'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';
import drawerMenu from './drawerMenu.json'
import styles from './style.js'
import { Button , Text} from 'native-base';
import {navigate} from '../../helpers/navigationHelper'

export default {

  /**********************LifeCycle Components in Order **********************************/

  /***********************Additonal Functions to be used within component ***************/

  renderDrawerItems: function (activeRoute) {
    return _.map(drawerMenu,function(menu,index){
      let menuButton = styles.menuButton;
      let menuIcon = styles.menuIcon;
      let menuText = styles.menuText;
      if(activeRoute == menu.screenName){
        menuButton = styles.activeMenuButton;
      }
      return (
        <Button onPress={()=> navigate(menu.screenName)} style={menuButton} key={JSON.stringify(menu) + index} full transparent>
          <Icon name={menu.icon} style={menuIcon} />
          <Text uppercase={false} style={menuText}>{menu.menuLabel}</Text>
        </Button>
      )
    })
  },

  /**********************Connecting and defining the Redux ******************************/
  mapStateToProps: function (state) {
    return {
      activeRoute : state.general.activeRoute,
    }
  },

  mapDispatchToProps: function (dispatch) {
    return {

    }
  },
}

// Local functions limitng to only this component 