import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { moderateScale, verticalScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  headingTextWrapper:{
    flex:0.2,
    flexDirection:'row',
  },
  headingText : {
    textAlign:'center',
    fontSize : moderateScale(20),
    paddingBottom : moderateScale(5),
    color :theme.fontPrimaryColor,
  },
  headingSubText : {
    textAlign : 'center',
    color :theme.fontPrimaryColor,
    fontSize: moderateScale(15)
  },
  headingTextContainer : {
    justifyContent:'center',
    flex:0.7,
    // backgroundColor:'red'
  },
  form : {
    flex:0.55,
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
