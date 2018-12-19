import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceWidth, getDeviceHeight, moderateScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  avatarContainer : {
    height : getDeviceHeight()*0.2,
    width : getDeviceWidth(),
    alignItems:'center',
    justifyContent:'flex-end',
  },
  exchangeIconTouchable:{
    position:'absolute',
    top:0,
    right:0,
  },
  exchangeIcon : {
    fontSize:moderateScale(16),
    color : theme.primaryColor,
    padding:moderateScale(4),
  },
  formWrapper : {
    height:getDeviceHeight()*0.9,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  form : {
    height:getDeviceHeight()*0.88,
    width : getDeviceWidth()*0.95,
    justifyContent:'space-around'
  },
  item : {
    minHeight:moderateScale(60),
    alignItems:'flex-start',
    justifyContent:'flex-end',
  },
  label : {
    paddingTop : 0,
    paddingRight:0,
    marginRight : 0
  },
  input : {
    flex:1,
    flexDirection : 'row',
    paddingBottom : 0,
    justifyContent:'flex-end',
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(15),
  },
  registerButton : {
    backgroundColor : theme.primaryColor,
  },
  registerText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(20)
  },
  statusView : {

  },
  statusText : {
    fontStyle: "italic",
    color : theme.fontPrimaryColor,
    textAlign:'center',
  },
  postButtonText : {
    textDecorationColor:theme.fontPrimaryColor,
    textDecorationLine:"underline",
  }
});
