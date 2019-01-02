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
    flex:0.25,
    justifyContent:'flex-end',
    // backgroundColor:'red'
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
    fontSize: moderateScale(20),
    textAlign : 'center',
  },
  headingTextContainer : {
    justifyContent:'center',
  },
  reportButtonContainer : {
    flex:0.15, 
    justifyContent:'center',
    // alignItems:'center',
  }, 
  reportButton:{
    backgroundColor : theme.primaryColor,
    // alignItems:'center',
    // justifyContent:'center',
    alignSelf : 'center',
    paddingRight : moderateScale(20),
    paddingLeft : moderateScale(20),
  },
  reportButtonText : {
    textAlign : 'center',
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(15),
  },
  warningTextsContainer : {
    flex:0.25,
    justifyContent:'center',
    alignItems : 'center',
  },
  warningText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(15),
  },
  text_OR : {
    fontSize:moderateScale(18),
    color : theme.fontPrimaryColor,
    textAlign : 'center',
  },
  lowerStaticTextView : {
    flex:0.15
  },
  sendIconWrapper : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    padding : moderateScale(5),
    borderWidth : moderateScale(1),
    paddingRight : moderateScale(10),
    borderColor : theme.fontPrimaryColor,
    margin : moderateScale(10),
    borderRadius : moderateScale(40)
  },
  sendIcon : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(30),
  },
  textArea : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(15),
  }
});
