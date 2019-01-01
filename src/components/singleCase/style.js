import {StyleSheet} from 'react-native'
import { moderateScale, getDeviceHeight } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
  container : {
    height : getDeviceHeight()*.15,
    flexDirection : 'row',
    marginTop : moderateScale(15),
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
    justifyContent:'space-between',
  },
  caseReportedTitle:{
    fontSize:moderateScale(20),
    color : theme.fontPrimaryColor,
  },
  subDetailsContainer:{
    flexDirection:'row',
    justifyContent : 'space-between',
  },
  subDetailsText:{
    fontSize:moderateScale(15),
    color : theme.fontPrimaryColor,
  }
});
