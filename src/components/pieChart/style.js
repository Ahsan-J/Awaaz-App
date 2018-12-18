import {StyleSheet} from 'react-native'
import { moderateScale, getDeviceWidth, getDeviceHeight } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
  parentContainer :{ 
    height: getDeviceHeight() * 0.4, 
    width: getDeviceWidth(), 
    flex: 1, 
    margin : moderateScale(5),
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  container : {
    flex:0.95,
    // height : moderateScale(100),
    justifyContent : 'center',
    // alignItems : 'center',
    borderRadius : moderateScale(15),
    borderColor : theme.primaryColor,
    borderWidth : moderateScale(1),
  },
  title : {
    color : theme.fontPrimaryColor,
    fontWeight : '500',
    fontSize : moderateScale(20),
    paddingLeft : moderateScale(10),
  }, 
  chart : {
    flex:0.9,
    // width : getDeviceWidth()*0.9,
  }
});
