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
  text : {
    color : theme.fontPrimaryColor,
    fontSize:moderateScale(15),
  },
  victimsControls : {
    height:verticalScale(80),
    justifyContent:'space-around',
    borderBottomWidth : 1,
    borderColor : theme.fontPrimaryColor
  },
  headingTextWrapper:{
    height:getDeviceHeight()*0.2,
    justifyContent:'center',
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
    minHeight:getDeviceHeight()*0.4,
    // justifyContent:'space-around',
  },
  wrapperFileDetails:{
    flexDirection:'row',
    minHeight : verticalScale(35),
    alignItems : 'center',
    // justifyContent:'space-between',
  },
  fileIndex : {
    color : theme.fontPrimaryColor,
    flex:0.1,
    textAlign:'left',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  circle :{
    width : moderateScale(45),
    height : moderateScale(45),
    borderRadius:moderateScale(45),
    borderColor : theme.fontPrimaryColor,
    borderWidth : moderateScale(1),
    justifyContent:'center',
    alignItems : 'center',
  }, 
  circleText : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(22),
  },
  circleAddIconWrapper : {
    position:'absolute',
    bottom:0,
    right:0,
    borderRadius:moderateScale(20),
    backgroundColor:theme.fontPrimaryColor
  },
  circleAddIcon : {
    flex:1,
    color : theme.successColor,
    fontSize:moderateScale(18),
  },
  fileName : {
    color : theme.fontPrimaryColor,
    flex:0.7,
    alignItems:'center',
  },
  fileSize : {
    color : theme.fontPrimaryColor,
    flex:0.2,
    justifyContent:'flex-end',
    textAlign:'right',
    alignItems:'center',
  },
  uploadButtonContainer : {
    marginTop:moderateScale(20),
    flexDirection:'row',
    justifyContent:'space-evenly',
  },  
  authorityInformWrapper: {
    justifyContent:'space-between',
    alignItems : 'center',
    height: getDeviceHeight()*0.1,
    flexDirection:'row'
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
