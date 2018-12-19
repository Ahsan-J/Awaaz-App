import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceWidth, getDeviceHeight, moderateScale, verticalScale } from '../../helpers/sizeHelpers';

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
    minHeight:getDeviceHeight()*.8,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  form : {
    minHeight:getDeviceHeight()*0.75,
    width : getDeviceWidth()*0.95,
    justifyContent:'space-around',
  },
  item : {
    minHeight : verticalScale(55),
    alignItems:'flex-start',
    justifyContent:'flex-end',
    // flex:1,
    // backgroundColor:'red'
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
    height : verticalScale(40),
    justifyContent:'flex-end',
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(15),
  },
  genderPicker : {
    width:moderateScale(100),
  },
  registerButton : {
    marginTop : verticalScale(30),
    backgroundColor : theme.primaryColor,
  },
  registerText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(20)
  }
});
