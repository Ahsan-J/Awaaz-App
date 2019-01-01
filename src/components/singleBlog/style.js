import { StyleSheet } from 'react-native'
import { getDeviceWidth, getDeviceHeight, moderateScale } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme.js' 

export default StyleSheet.create({
  container : {
    marginTop : moderateScale(20)
  },
  imageContainer : {
    width : getDeviceWidth(),
    height : getDeviceWidth()/2,
  },
  blogImage:{
    width : '100%',
    height : '100%',
  },
  blogDetailsContainer:{
    height : getDeviceHeight()*0.15,
    width:'100%',
    flexDirection : 'row',
  },
  timeContainer:{
    flex:0.3,
    backgroundColor : theme.primaryColor,
    borderColor:theme.primaryColor,
    borderTopWidth : moderateScale(0.5),
    borderBottomWidth : moderateScale(0.5),
  },
  date : {
    color : theme.secondaryColor,
    textAlign : 'center',
    fontWeight : '800',
    fontSize:moderateScale(35),
  },
  month : {
    textAlign : 'center',
    color : theme.secondaryColor,
    fontSize:moderateScale(20),
  },
  contentContainer:{
    flex:0.7,
    color : theme.fontPrimaryColor,
    borderColor:theme.primaryColor,
    borderWidth : moderateScale(0.5),
    padding:moderateScale(8),
  },
  blogTitle:{
    fontSize: moderateScale(18),
    color : theme.fontPrimaryColor,
    fontWeight:'600',
  },
  blogContent:{
    color : theme.fontPrimaryColor,
    fontSize:moderateScale(14),
  }
});
