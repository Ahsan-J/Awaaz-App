import {StyleSheet} from 'react-native'
import { getDeviceHeight, getDeviceWidth, scale } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
  headerContainer : {
    height : getDeviceHeight()*0.1,
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
    fontSize:scale(28),
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
  },  
  headerRight : {
    flex:0.15,
    alignItems : 'center',
    justifyContent : 'center',
  },
});
