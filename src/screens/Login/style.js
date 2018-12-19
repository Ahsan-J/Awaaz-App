import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceWidth, getDeviceHeight, moderateScale, verticalScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.secondaryColor,
  },
  avatarContainer : {
    alignItems:'center',
    justifyContent:'flex-end',
    flex:0.35
  },
  formWrapper : {
    flex:0.55,
    flexDirection : 'row',
    justifyContent:'center'
  },
  form : {
    flex:0.95,
    // backgroundColor:'red',
    justifyContent:'space-around',
    // marginBottom : moderateScale(10),
  },
  item : {
    minHeight:moderateScale(55),
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
    height : verticalScale(40),
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
  facebookButton : {
    backgroundColor :'#3C5A99',
    paddingLeft : 0,
  },
  googleButton : {
    backgroundColor:'#DB4437',
    paddingLeft : 0,
  },
  facebookIcon : {
    marginLeft:8,
    color : '#ffffff',
    fontSize : moderateScale(22),
  },
  googleIcon : {
    marginLeft:8,
    color : '#ffffff',
    fontSize : moderateScale(22),
  },
  facebookText : {
    fontSize : moderateScale(12),
    paddingLeft : moderateScale(3),
    paddingRight : moderateScale(10),
  },
  googleText : {
    fontSize : moderateScale(12),
    paddingLeft : moderateScale(3),
    paddingRight : moderateScale(10),
  },
  statusText : {
    color : theme.fontPrimaryColor,
    textAlign:'center',
  },
  postButtonText : {
    marginTop : moderateScale(5),
    padding:moderateScale(2),
    textDecorationColor:theme.fontPrimaryColor,
    textDecorationLine:"underline",
  }
});
