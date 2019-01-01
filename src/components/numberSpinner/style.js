import {StyleSheet} from 'react-native'
import { moderateScale } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
  container : {
    width : moderateScale(100),
    height : moderateScale(30),
    // backgroundColor : 'red',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    borderRadius : moderateScale(5),
    borderColor : theme.fontPrimaryColor,
    borderWidth : moderateScale(0.5),
  },
  buttonsTouchable : {
    flex:0.3,
    alignItems:'center',
    justifyContent:'center',
    height:'100%',
    backgroundColor : theme.fontPrimaryColor,
  },
  counter : {
    flex:0.6,
    color : theme.fontPrimaryColor,
    borderColor : theme.fontPrimaryColor,
    textAlign : 'center',
  },
  icon : {
    color : theme.fontSecondaryColor,
  }
});
