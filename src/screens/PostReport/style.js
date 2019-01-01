import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceHeight, verticalScale, moderateScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: theme.secondaryColor,
    justifyContent: 'space-between',
  },
  contentContainer: {
    // flex:1,
    // alignItems: 'center',
  },
  text : {
    color : theme.fontPrimaryColor,
    fontSize:moderateScale(15),
  },
  headingTextWrapper:{
    flex:0.85,
    // justifyContent:'center',
  },
  headingText : {
    textAlign:'center',
    fontSize : moderateScale(30),
    paddingTop : moderateScale(20),
    paddingBottom : moderateScale(20),
    color :theme.fontPrimaryColor,
  },
  headingSubText : {
    color :theme.fontPrimaryColor,
    fontSize: moderateScale(15)
  },
  headingTextContainer : {
    justifyContent:'center',
  },

  keyView : {
    flex:0.15,
    // justifyContent:'center',
  },
  secretKeyStyle : {
    color : theme.fontPrimaryColor,
    fontSize:moderateScale(15),
    padding : moderateScale(5),
    textDecorationLine : 'underline'
  },
  clipboardIcon : {
    color : theme.successColor,
    padding:moderateScale(5),
    fontSize:moderateScale(20),
  },
  buttonGroup : {
    // flex:0.2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  nextButton : {
    flex:0.5,
    borderColor : theme.fontPrimaryColor,
    borderWidth : moderateScale(0.5),
    backgroundColor : theme.primaryColor,
    alignItems:'center',
    justifyContent:'center',
  },
  nextText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(15),
    textAlign:'center',
  },
  skipButton : {
    flex:0.5,
    borderColor : theme.fontPrimaryColor,
    borderWidth : moderateScale(0.5),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor : theme.secondaryColor,
  },
  skipText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(15),
    textAlign:'center',
  },
});
