import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceWidth, getDeviceHeight, moderateScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.secondaryColor,
  },
  avatarContainer : {
    alignItems:'center',
    justifyContent:'flex-end',
    flex:0.3
  },
  formWrapper : {
    flex:0.4,
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
    justifyContent:'space-around'
  },
  label : {
    flex: 0.35,
    paddingRight:0,
    marginRight : 0
  },
  input : {
    color : theme.fontPrimaryColor,
    flex:0.65,
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
    paddingLeft : moderateScale(10),
    paddingRight : moderateScale(10),
  },
  googleText : {
    paddingLeft : moderateScale(10),
    paddingRight : moderateScale(10),
  },
  statusText : {
    color : theme.fontPrimaryColor,
    textAlign:'center',
  },
  postButtonText : {
    textDecorationColor:theme.fontPrimaryColor,
    textDecorationLine:"underline",
  }
});
