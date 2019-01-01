import {StyleSheet} from 'react-native'
import { verticalScale, moderateScale } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
    container : {
      height : verticalScale(100),
      // backgroundColor : 'red',
      flexDirection : 'row',
    },
    text : {
      color : theme.fontPrimaryColor,
      fontSize : moderateScale(15),
    },
    mainSide: {
      flex:0.75,
      justifyContent:'space-evenly',
      borderBottomWidth : moderateScale(1),
      borderColor : theme.primaryColor,
      // backgroundColor : 'green'
    },
    nameAndStatusContainer : {
      flexDirection:'row',
      justifyContent : 'space-between',
      alignItems : 'center',
    },
    nameText:{
      fontSize:moderateScale(20),
    },
    relationContainer : {
      flexDirection:'row',
      alignItems : 'center',
    },
    contactContainer : {
      flexDirection:'row',
      alignItems : 'center',
    },
    sideButton : {
      flex:0.25,
      alignItems:'center',
      justifyContent:'center',
      borderColor : theme.primaryColor,
      borderWidth : moderateScale(1),
    },
    sideButtonIcon:{
      color : theme.fontPrimaryColor,
      fontSize : moderateScale(30),
    },
    sideButtonText : {
      fontSize : moderateScale(16)
    }
});
