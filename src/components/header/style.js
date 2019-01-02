import {StyleSheet} from 'react-native'
import { getDeviceHeight, getDeviceWidth, scale, moderateScale } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
  headerContainer : {
    height : getDeviceHeight()*0.09,
    width : getDeviceWidth(),
    backgroundColor : theme.primaryColor,
    flexDirection : 'row'
  },
  headerLeft : {
    flex:0.15,
    alignItems : 'center',
    justifyContent : 'center',
  },
  headerLeftIcon:{
    fontSize:scale(25),
    color : theme.secondaryColor,
  },
  headerBody : {
    flex:0.7,
    alignItems:'center',
    justifyContent:'center',
  },
  headerTitle:{
    fontWeight:'400',
    color:theme.secondaryColor,
    fontSize:moderateScale(20),
  },  
  headerRight : {
    flex:0.15,
    alignItems : 'center',
    justifyContent : 'center',
  },
});
