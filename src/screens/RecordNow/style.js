import {StyleSheet} from 'react-native'
import theme from '../../constant/theme';
import { moderateScale, getDeviceWidth, verticalScale } from '../../helpers/sizeHelpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  buttonContainer:{
    flexDirection : 'row',
  },
  buttonTouchables : {
    height : getDeviceWidth()/2,
    width : getDeviceWidth()/2,
    borderColor : theme.primaryColor,
    borderWidth : moderateScale(1),
    justifyContent : 'center',
    alignItems : 'center',
  },
  buttonIcon :{
    color : theme.fontPrimaryColor,
    fontSize : moderateScale(45),
  },
  buttonText : {
    color : theme.fontPrimaryColor,
    textAlign : 'center',
    fontSize : moderateScale(18),
    marginTop : verticalScale(10),
  },
  textMainView:{
    flex:1,
    // justifyContent:'space-around',
  },
  textHeading : {
    marginTop : verticalScale(25),
    marginBottom : verticalScale(25),
    fontSize : moderateScale(20),
    color : theme.fontPrimaryColor,
  },
  textParagraph : {
    fontSize : moderateScale(15),
    color : theme.fontPrimaryColor,
  }
});
