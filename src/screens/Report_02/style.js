import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { moderateScale, verticalScale, getDeviceHeight } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: theme.secondaryColor,
  },
  contentContainer: {
    // flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
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
    height:getDeviceHeight()*0.7,
    justifyContent:'space-around',
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
  buttonGroup : {
    flex:0.1,
    marginTop : moderateScale(10),
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
