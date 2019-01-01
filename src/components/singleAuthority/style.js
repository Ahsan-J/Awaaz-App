import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme.js'

export default StyleSheet.create({
  container : {
    height:verticalScale(120),
    flexDirection : 'row',
    marginTop : moderateScale(15),
    // marginBottom : moderateScale(5),
  },
  imageContainer : {
    borderColor: theme.primaryColor,
    borderTopWidth : moderateScale(0.5),
    borderBottomWidth : moderateScale(0.5),
  },
  mainView:{
    flex:1,
    borderColor: theme.primaryColor,
    borderWidth : moderateScale(0.5),
    padding:moderateScale(8),
  },
  title : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(16),
    fontWeight : '600',
  },
  areaOfExtertise : {
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(14),
  },
  contact : {
    color : theme.fontPrimaryColor,
    fontSize:moderateScale(14),
  }, 
  address : {
    color : theme.fontPrimaryColor,
    fontSize:moderateScale(13),
  }
});
