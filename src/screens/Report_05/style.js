import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { getDeviceHeight, verticalScale, moderateScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: theme.secondaryColor,
  },
  contentContainer: {
    // flex:1,
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  victimsControls : {
    height:verticalScale(80),
    justifyContent:'space-around',
    borderBottomWidth : 1,
    borderColor : theme.fontPrimaryColor
  },
  headingTextWrapper:{
    height:getDeviceHeight()*0.1,
    justifyContent:'center',
  },
  headingText : {
    textAlign:'center',
    fontSize : moderateScale(20),
    color :theme.fontPrimaryColor,
  },
  form : {
    minHeight:getDeviceHeight()*0.6,
    // justifyContent:'space-around',
  },
  radioQuestionWrapper : {
    minHeight : verticalScale(55),
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'space-between'
  },
  radioText : {
    color : theme.fontPrimaryColor,
  },
  radioOption : {
    flexDirection:'row',
    flex:0.2,
    justifyContent:'space-around'
  },
  item : {
    minHeight:verticalScale(55),
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
  buttonGroup : {
    flex:0.1,
    marginTop : verticalScale(10),
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
