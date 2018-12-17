import {StyleSheet} from 'react-native'
import { moderateScale, getDeviceHeight, getDeviceWidth, verticalScale } from '../../helpers/sizeHelpers';
import theme from '../../constant/theme';

export default StyleSheet.create({
  container : {
    width : getDeviceWidth(),
    alignItems : 'center',
    justifyContent :'center',
    flexDirection : 'row',
  },
  touchable : {
    backgroundColor : theme.warnColor,
    height : verticalScale(80),
    justifyContent :'center',
    flex:1,
    borderRadius : moderateScale(4),
    margin: moderateScale(8),
    padding: moderateScale(5),
  },
  crossIconTouchable : {
    position : 'absolute',
    justifyContent:'center',
    alignItems : 'center',
    padding : moderateScale(5),
    right : 0,
    top : 0,
  },
  crossIcon : {
    fontSize : moderateScale(18)
  },
  text: {

  },
});
